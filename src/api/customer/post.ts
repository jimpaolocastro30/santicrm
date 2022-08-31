import instance from '../instance'

const addCustomer = (data: CustomerProps, { token }: WithToken) =>
	new Promise<boolean>((resolve, reject) => {
		instance({ token })
			.post('/api/admin/add/santiCRM', data)
			.then(({ status }) => status === 200)
			.then(resolve)
			.catch(reject)
	})

export default addCustomer
