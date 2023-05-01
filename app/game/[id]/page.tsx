import { FC, memo } from 'react'
import SessionWrapper from '@/components/Session/SessionWrapper'
import UsersMenu from '@/components/Session/UsersMenu'
import Field from '@/components/Session/Field'

const SessionPage: FC = () => {
	return (
		<SessionWrapper>
			<UsersMenu />
			<Field />
		</SessionWrapper>
	)
}

export default memo(SessionPage)