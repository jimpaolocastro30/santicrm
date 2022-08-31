import instance from '../instance'
// import { getAllCustomerRecords } from './get'

const updateCustomer = (data: CustomerProps, { token }: WithToken) =>
	new Promise<boolean>((resolve, reject) => {
		const body: APICustomerProps = {
			Address: data.address,
			firstName: data.firstName,
			landlineNumber: data.landlineNumber,
			lastName: data.lastName,
			lastFourDigitCC: data.cardNumberSuffix,
			middleName: data.middleName,
			mobileNumber: data.mobileNumber,
			status: data.status,
			invitationCode: data.invitationCode
		}
		instance({ token })
			.put(`/api/admin/update/santiCRM/${data._id}`, body)
			.then(({ status }) => status === 200)
			.then(resolve)
			.catch(reject)
	})

export default updateCustomer
