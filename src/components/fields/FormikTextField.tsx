import { useField } from 'formik'
import React from 'react'
import styled from 'styled-components'
import TextField, { TextFieldExtraProps } from './TextField'

type FormikTextFieldProps = {
	styles?: { container?: React.CSSProperties }
	name: string
} & TextFieldExtraProps

const FormikTextField = (props: FormikTextFieldProps) => {
	const [field, meta] = useField(props.name)

	return (
		<Container style={props.styles?.container}>
			<TextField
				{...props}
				inputProps={{
					...props.inputProps,
					...field
				}}
			/>
			{meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
		</Container>
	)
}

const Container = styled.div``

const Error = styled.div`
	margin-top: 5px;
	font-size: 0.8rem;
	color: firebrick;
	text-align: right;
`

export default FormikTextField
