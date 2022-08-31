import React from 'react'
import styled from 'styled-components'
import SignUpHistoryPageHeader from './SignUpHistoryPageHeader'
import SignUpHistoryPageTable from './SignUpHistoryPageTable'

type SignUpHistoryPageProps = {
	styles?: { container?: React.CSSProperties }
}

const SignUpHistoryPage = (props: SignUpHistoryPageProps) => {
	return (
		<Container style={props.styles?.container}>
			<SignUpHistoryPageHeader />
			<SignUpHistoryPageTable />
		</Container>
	)
}

const Container = styled.div`
	padding: clamp(1rem, 3vw, 2rem);
`

export default SignUpHistoryPage
