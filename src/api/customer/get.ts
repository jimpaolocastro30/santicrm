import instance from '../instance'

type ResAll = {
	identifier: string
	allUser: Array<APICustomerProps>
}

type ResOne = {
	identifier: string
	allUser: APICustomerProps
}

const getAllCustomerRecords = ({ token }: WithToken) =>
	new Promise<Array<CustomerProps>>((resolve, reject) => {
		instance({ token })
			.get<ResAll>('/api/admin/get/all/santiCRM')
			.then(({ data }) => data.allUser)
			.then((array) =>
				array.map(
					(item) =>
						({
							address: item.Address,
							cardNumberSuffix: item.lastFourDigitCC,
							firstName: item.firstName,
							invitationCode: item.invitationCode,
							landlineNumber: item.landlineNumber,
							lastName: item.lastName,
							middleName: item.middleName,
							mobileNumber: item.mobileNumber,
							status: item.status as AccountStatus,
							_id: item._id
						} as CustomerProps)
				)
			)
			.then(resolve)
			.catch(reject)
	})

const getCustomerRecord = (_id: string, { token }: WithToken) =>
	new Promise<CustomerProps>((resolve, reject) => {
		instance({ token })
			.get<ResOne>(`/api/admin/get/one/santiCRM/${_id}`)
			.then(({ data }) => data.allUser)
			.then((item) => {
				return {
					address: item.Address,
					cardNumberSuffix: item.lastFourDigitCC,
					firstName: item.firstName,
					invitationCode: item.invitationCode,
					landlineNumber: item.landlineNumber,
					lastName: item.lastName,
					middleName: item.middleName,
					mobileNumber: item.mobileNumber,
					status: item.status as AccountStatus,
					_id: item._id
				} as CustomerProps
			})
			.then(resolve)
			.catch(reject)
	})

export { getAllCustomerRecords, getCustomerRecord }
