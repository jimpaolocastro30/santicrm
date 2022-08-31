import React from 'react'
import styled from 'styled-components'
import Brand from '../../components/Brand'

type SignUpHistoryPageHeaderProps = {
	styles?: { container?: React.CSSProperties }
}

const SignUpHistoryPageHeader = (props: SignUpHistoryPageHeaderProps) => {
	return (
		<Container style={props.styles?.container}>
			<Brand />
			<Title>Registration History</Title>
			{/* <Caption>Please fill-up the form below:</Caption> */}
		</Container>
	)
}

const Container = styled.div`
	margin-bottom: 2rem;
`

const Title = styled.h1`
	margin-bottom: 0.7ch;
`

export default SignUpHistoryPageHeader
