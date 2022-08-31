import React from 'react'
import styled from 'styled-components'
import FormikTextField from '../../components/fields/FormikTextField'

type SignUpPageFormProps = {
	styles?: { container?: React.CSSProperties }
}

const SignUpPageFields = (props: SignUpPageFormProps) => {
	return (
		<Container style={props.styles?.container}>
			<FormikTextField name='firstName' label='First Name' />
			<FormikTextField name='middleName' label='Middle Name' />
			<FormikTextField name='lastName' label='Last Name' />
			<FormikTextField name='address' label='Address' styles={{ container: { gridColumn: '1/-1' } }} />
			<FormikTextField name='mobileNumber' label='Mobile Number' />
			<FormikTextField name='landlineNumber' label='Landline Number' />
			<FormikTextField name='cardNumberSuffix' label='Last 4-digit Card Number' />
			<FormikTextField name='status' label='Status' inputProps={{ readOnly: true, className: 'status' }} />
			<FormikTextField name='invitationCode' label='Invitation Code' />
		</Container>
	)
}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: clamp(1rem, 3vw, 2rem);

	@media (max-width: 767px) {
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	}

	.status {
		background-color: transparent;
		color: crimson;
		font-weight: 600;
		text-transform: uppercase;
	}
`

export default SignUpPageFields
