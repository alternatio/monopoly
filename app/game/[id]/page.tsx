import { FC, memo } from 'react'
import SessionWrapper from '@/components/Session/SessionWrapper'
import UsersMenu from '@/components/Session/UsersMenu'

const SessionPage: FC = () => {
	return (
		<SessionWrapper>
			<UsersMenu />

		</SessionWrapper>
	)
}

export default memo(SessionPage)