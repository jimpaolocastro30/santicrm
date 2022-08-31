import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { initialValues } from './data'
import SignUpPageFields from './SignUpPageFields'
import SignUpPageHeader from './SignUpPageHeader'
import Hero from '../../assets/wp4144224-american-express-wallpapers.jpg'
import SignUpPageButtons from './SignUpPageButtons'
import validationSchema from './validationSchema'
import addCustomer from '../../api/customer/post'
import Swal2 from '../../components/Swal2'

type SignUpPageProps = {
	styles?: { container?: React.CSSProperties }
}

const SignUpPage = (props: SignUpPageProps) => {
	const token: string | undefined = undefined

	return (
		<Container style={props.styles?.container}>
			<HeroColumn>
				<HeroImage src={Hero} alt='card' />
			</HeroColumn>
			<Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={(values) => {
					addCustomer(values, { token }).then((success) =>
						Swal2.fire({
							title: 'Add Customer',
							text: 'Successfully added.',
							icon: 'success'
						})
					)
				}}
			>
				<FormColumn>
					<FormikForm>
						<SignUpPageHeader />
						<SignUpPageFields />
						<SignUpPageButtons />
					</FormikForm>
				</FormColumn>
			</Formik>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	min-height: 100vh;

	@media (max-width: 767px) {
		flex-direction: column;
	}
`

const Column = styled.div`
	flex: 1;
`

const HeroColumn = styled(Column)`
	flex: 1;
	position: relative;

	@media (max-width: 767px) {
		min-height: 25vh;
	}
`

const FormColumn = styled(Column)`
	flex: 1.5;
	padding: clamp(2rem, 4vw, 5rem);
`

const FormikForm = styled(Form)``

const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center top;
	position: absolute;
	left: 0;
	top: 0;
`

export default SignUpPage
