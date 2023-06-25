import { FC, memo } from 'react'
import SessionWrapper from '@/components/Session/SessionWrapper/SessionWrapper'
import UsersMenu from '@/components/Session/Users/UsersMenu'
import Field from '@/components/Session/Field/Field'

const SessionPage: FC = () => {
	return (
		<SessionWrapper>
			<UsersMenu />
			<Field />
		</SessionWrapper>
	)
}

export default memo(SessionPage)