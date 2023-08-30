import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CommonCell from '@/components/Session/Cells/CommonCell'
import CornerCell from '@/components/Session/Cells/CornerCell'
import TaxCell from '@/components/Session/Cells/TaxCell'
import UncommonCell from '@/components/Session/Cells/UncommonCell'
import ChanceCell from '@/components/Session/Cells/ChanceCell'
import { userGameDataI } from '@/store/interfaces/user'
import Chat from '@/components/Session/Cells/GameChat/Chat'

interface CellProps {
	data: cellI
	onClick?: () => void
}

const Cell: FC<CellProps> = props => {
	return (
		<>
			<CommonCell data={props.data} />
			<UncommonCell data={props.data} />
			<CornerCell data={props.data} />
			<ChanceCell data={props.data} />
			<TaxCell data={props.data} />
			<Chat data={props.data} />
		</>
	)
}

export default memo(Cell)
