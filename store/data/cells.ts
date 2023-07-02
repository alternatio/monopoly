import {
	baseCellI,
	cellI,
	chanceI,
	cornerI,
	positionT,
	taxI,
} from '@/store/interfaces/cell'
import { companies } from '@/store/data/companies'
import { chanceImage, taxImage } from '@/lib/importImage'

// common cells
const startCell: cornerI = {
	type: 'corner',
	text: 'startCell',
	image: '',
}
const prisonCell: cornerI = {
	type: 'corner',
	text: 'prisonCell',
	image: '',
}
const diceCell: cornerI = {
	type: 'corner',
	text: 'diceCell',
	image: '',
}
const policemanCell: cornerI = {
	type: 'corner',
	text: 'policemanCell',
	image: '',
}
const taxCell: taxI = {
	type: 'tax',
	image: taxImage,
}
const chanceCell: chanceI = {
	type: 'chance',
	image: chanceImage,
}

const corners = [startCell, prisonCell, diceCell, policemanCell]

export const generateCells = (
	gridSize: [number, number] = [13, 13],
	cellWidth: number = 2,
	taxesPositions: [number[], number[], number[], number[]] = [
		[3],
		[1],
		[7],
		[7],
	],
	chancePositions: [number[], number[], number[], number[]] = [
		[1, 6],
		[6],
		[1],
		[2, 5],
	]
) => {
	const cells: cellI[] = []
	const companiesArray = [...companies]

	const xCellsLength = gridSize[0] - cellWidth * 2
	const yCellsLength = gridSize[1] - cellWidth * 2

	for (let i = 0; i < 4; i++) {
		const isTop = i === 1 || i === 2
		const isLeft = i === 0 || i === 1
		const isX = i === 0 || i == 2

		let direction: baseCellI['direction']
		switch (i) {
			case 0:
				direction = 'left'
				break
			case 1:
				direction = 'top'
				break
			case 2:
				direction = 'right'
				break
			case 3:
				direction = 'bottom'
				break
		}

		const cornerPosition: positionT = [
			isLeft ? 1 : gridSize[0] + 1 - cellWidth,
			isLeft ? cellWidth + 1 : gridSize[0] + 1,
			isTop ? 1 : gridSize[1] + 1 - cellWidth,
			isTop ? cellWidth + 1 : gridSize[1] + 1,
		]

		cells.push({
			data: corners[i],
			position: cornerPosition,
		})

		for (let j = 0; j < (isX ? xCellsLength : yCellsLength); j++) {
			const currentCellPosition: positionT = [
				isX ? (isLeft ? 1 : gridSize[0] - cellWidth + 1) : j + cellWidth + 1,
				isX ? (isLeft ? cellWidth + 1 : gridSize[0] + 1) : j + cellWidth + 1,
				isX ? j + cellWidth + 1 : isTop ? 1 : gridSize[0] - cellWidth + 1,
				isX ? j + cellWidth + 2 : isTop ? cellWidth + 1 : gridSize[0] + 1,
			]
			if (taxesPositions[i].includes(j)) {
				cells.push({
					data: {...taxCell, direction},
					position: currentCellPosition,
				})
				continue
			} else if (chancePositions[i].includes(j)) {
				cells.push({
					data: {...chanceCell, direction},
					position: currentCellPosition,
				})
				continue
			}

			cells.push({
				data: {...companiesArray[0], direction},
				position: currentCellPosition,
			})
			companiesArray.splice(0, 1)
		}
	}

	cells.push({
		data: {type: 'chat'},
		position: [
			cellWidth + 1,
			gridSize[0] + 1 - cellWidth,
			cellWidth + 1,
			gridSize[1] + 1 - cellWidth,
		],
	})

	return cells
}
