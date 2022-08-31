import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required('This field is required'),
	lastName: Yup.string().required('This field is required'),
	middleName: Yup.string().required('This field is required'),
	address: Yup.string().required('This field is required'),
	// mobileNumber: Yup.string ().required('This field is required'),
	// landlineNumber: Yup.string ().required('This field is required'),
	cardNumberSuffix: Yup.string().required('This field is required'),
	status: Yup.string().required('This field is required')
	// invitationCode: Yup.string ().required('This field is required'),
})

export default validationSchema
