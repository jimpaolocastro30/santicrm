import React from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

type TextFieldProps = {} & TextFieldExtraProps

export type TextFieldExtraProps = {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	label?: string
}

const TextField = (props: TextFieldProps) => {
	const id = React.useMemo<string>(() => v4(), [])

	return (
		<Container>
			{props.label ? <label htmlFor={id}>{props.label}</label> : null}
			<input {...props?.inputProps} id={id} />
		</Container>
	)
}

const Container = styled.div`
	label {
		font-size: 0.9rem;
		margin-bottom: 1ch;
		display: block;
		font-weight: 600;
		color: #555;
	}

	input {
		border: none;
		background-color: #f8f7f9;
		border-radius: 3px;
		padding: clamp(0.5rem, 2vw, 0.85rem) 1rem;
		font-family: inherit;
	}
`

export default TextField
