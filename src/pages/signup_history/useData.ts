import React from 'react'
import { getAllCustomerRecords } from '../../api/customer/get'
import error from '../../api/error'

type Props = {
	data: Array<CustomerProps>
}

const useData = ({ token }: WithToken): Props => {
	const [data, setData] = React.useState<Array<CustomerProps>>([])

	React.useEffect(() => {
		getAllCustomerRecords({ token }).then(setData).catch(error)
		// setData(
		// 	Array.from({ length: 25 }).map(() => ({
		// 		address: 'makati',
		// 		cardNumberSuffix: '2234',
		// 		firstName: 'Jordan',
		// 		invitationCode: '',
		// 		landlineNumber: '0988822331',
		// 		lastName: 'clarkson',
		// 		middleName: 'a',
		// 		mobileNumber: '0988822331',
		// 		status: 'unverified'
		// 	}))
		// )
	}, [token])

	return { data }
}

export default useData
