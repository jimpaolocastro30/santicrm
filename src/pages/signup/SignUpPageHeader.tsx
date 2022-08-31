import React from 'react'
import styled from 'styled-components'
import Brand from '../../components/Brand'
type SignUpPageHeaderProps = {
	styles?: { container?: React.CSSProperties }
}

const SignUpPageHeader = (props: SignUpPageHeaderProps) => {
	return (
		<Container style={props.styles?.container}>
			<Brand />
			<Title>Registration Form</Title>
			<Caption>Please fill-up the form below:</Caption>
		</Container>
	)
}

const Container = styled.div`
	margin-bottom: 2rem;
`

const Title = styled.h1`
	margin-bottom: 0.7ch;
`

const Caption = styled.p``

export default SignUpPageHeader
