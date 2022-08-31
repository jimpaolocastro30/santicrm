import { AxiosError } from 'axios'
import Swal from '../components/Swal2'

const error = <T extends { error?: string }>(reason: AxiosError<T>) => {
	// const { message }: T = reason.response?.data || {
	// 	date: new Date(),
	// 	message: reason.message || 'No error message caught.'
	// }
	Swal.fire({
		title: 'Error Found',
		text: reason.response?.data.error || reason.message,
		icon: 'error',
		footer: reason.config.url
	})
}

export default error
