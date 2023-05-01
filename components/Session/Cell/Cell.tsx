'use client'

import { FC, memo } from 'react'
import { cellI } from '@/store/interfaces/cell'
import CommonCell from '@/components/Session/Cell/CommonCell'
import CornerCell from '@/components/Session/Cell/CornerCell'
import TaxCell from '@/components/Session/Cell/TaxCell'
import UncommonCell from '@/components/Session/Cell/UncommonCell'
import ChanceCell from '@/components/Session/Cell/ChanceCell'

const Cell: FC<cellI> = props => {
	return (
		<>
			<CommonCell cell={props} />
			<UncommonCell cell={props} />
			<CornerCell cell={props} />
			<ChanceCell cell={props} />
			<TaxCell cell={props} />
		</>
	)
}

export default memo(Cell)
