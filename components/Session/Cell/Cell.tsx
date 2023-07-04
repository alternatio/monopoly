import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CommonCell from '@/components/Session/Cell/CommonCell'
import CornerCell from '@/components/Session/Cell/CornerCell'
import TaxCell from '@/components/Session/Cell/TaxCell'
import UncommonCell from '@/components/Session/Cell/UncommonCell'
import ChanceCell from '@/components/Session/Cell/ChanceCell'
import { userGameDataI } from '@/store/interfaces/user'
import Chat from '@/components/Session/Cell/Chat/Chat'

const Cell: FC<cellI> = props => {
	return (
		<>
			<CommonCell data={props.data} position={props.position} index={props.index} />
			<UncommonCell data={props.data} position={props.position} index={props.index} />
			<CornerCell data={props.data} position={props.position} index={props.index} />
			<ChanceCell data={props.data} position={props.position} index={props.index} />
			<TaxCell data={props.data} position={props.position} index={props.index} />
			<Chat data={props.data} position={props.position} />
		</>
	)
}

export default memo(Cell)
