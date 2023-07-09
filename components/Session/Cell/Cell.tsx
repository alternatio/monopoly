import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CommonCell from '@/components/Session/Cell/CommonCell'
import CornerCell from '@/components/Session/Cell/CornerCell'
import TaxCell from '@/components/Session/Cell/TaxCell'
import UncommonCell from '@/components/Session/Cell/UncommonCell'
import ChanceCell from '@/components/Session/Cell/ChanceCell'
import { userGameDataI } from '@/store/interfaces/user'
import Chat from '@/components/Session/Cell/Chat/Chat'

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
