'use client'

import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CommonCell from '@/components/Session/Cell/CommonCell'
import CornerCell from '@/components/Session/Cell/CornerCell'
import TaxCell from '@/components/Session/Cell/TaxCell'
import UncommonCell from '@/components/Session/Cell/UncommonCell'
import ChanceCell from '@/components/Session/Cell/ChanceCell'
import {userGameDataI} from "@/store/interfaces/user";
import Chat from '@/components/Session/Cell/Chat/Chat'

export interface cellsWithPossibleMovesI {
	cell: cellI
	playerGameData?: userGameDataI
}

const Cell: FC<cellI> = props => {
	return (
		<>
			<CommonCell cell={props} />
			<UncommonCell cell={props} />
			<CornerCell cell={props} />
			<ChanceCell cell={props} />
			<TaxCell cell={props} />
			<Chat cell={props} />
		</>
	)
}

export default memo(Cell)
