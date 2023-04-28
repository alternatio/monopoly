import {
	cellI,
	chanceI,
	diceI,
	policemanI,
	positionT,
	prisonI,
	startI,
	taxI,
} from '@/store/interfaces/cell'
import { companies } from '@/store/data/companies'

// common cells
const chanceCell: chanceI = {
	type: 'chance',
}
const taxCell: taxI = {
	type: 'tax',
}
const startCell: startI = {
	type: 'start',
}
const prisonCell: prisonI = {
	type: 'prison',
}
const policemanCell: policemanI = {
	type: 'policeman',
}
const diceCell: diceI = {
	type: 'dice',
}

const corners = [startCell, prisonCell, diceCell, policemanCell]

export const cells: cellI[] = []

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
	cells.splice(0, cells.length)
	const companiesArray = [...companies]

	const xCellsLength = gridSize[0] - cellWidth * 2
	const yCellsLength = gridSize[1] - cellWidth * 2

	for (let i = 0; i < 4; i++) {
		const isTop = i === 1 || i === 2
		const isLeft = i === 0 || i === 1
		const isX = i === 0 || i == 2

		const cornerPosition: positionT = [
			isLeft ? 0 : gridSize[0] - cellWidth,
			isLeft ? cellWidth : gridSize[0],
			isTop ? 0 : gridSize[1] - cellWidth,
			isTop ? cellWidth : gridSize[1],
		]

		cells.push({
			data: corners[i],
			position: cornerPosition,
		})

		for (let j = 0; j < (isX ? xCellsLength : yCellsLength); j++) {
			const currentCellPosition: positionT = [
				isX ? (isLeft ? 0 : gridSize[0] - cellWidth) : j + cellWidth,
				isX ? (isLeft ? cellWidth : gridSize[0]) : j + cellWidth + 1,
				isX ? j + cellWidth : isTop ? 0 : gridSize[0] - cellWidth,
				isX ? j + cellWidth + 1 : isTop ? cellWidth : gridSize[0],
			]
			if (taxesPositions[i].includes(j)) {
				cells.push({
					data: taxCell,
					position: currentCellPosition,
				})
				continue
			} else if (chancePositions[i].includes(j)) {
				cells.push({
					data: chanceCell,
					position: currentCellPosition,
				})
				continue
			}

			cells.push({
				data: companiesArray[0],
				position: currentCellPosition,
			})
			companiesArray.splice(0, 1)
		}
	}
	console.log(cells)
}
