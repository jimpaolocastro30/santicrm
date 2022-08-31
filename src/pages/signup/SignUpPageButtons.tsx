import React from 'react'
import styled from 'styled-components'

type SignUpPageButtonsProps = {
	styles?: { container?: React.CSSProperties }
}

const SignUpPageButtons = (props: SignUpPageButtonsProps) => {
	return (
		<Container style={props.styles?.container}>
			<Submit type='submit'>Submit</Submit>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: clamp(2rem, 3vw, 3rem);
`

const Button = styled.button`
	padding: clamp(0.5rem, 2vw, 0.85rem) 3rem;
	text-transform: uppercase;
	letter-spacing: 0.5px;
`

const Submit = styled(Button)`
	background-color: darkslateblue;
	color: #fff;
`

export default SignUpPageButtons
