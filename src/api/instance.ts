import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

const baseURL = process.env.REACT_APP_API_BASE_URL

const instance = ({ token }: WithToken): AxiosInstance => {
	let headers: AxiosRequestHeaders = { 'Content-Type': 'application/json' }
	if (token)
		headers = {
			...headers,
			Authorization: `Bearer ${token}`
		}
	if (!token) delete headers.token
	const config: AxiosRequestConfig = { headers, baseURL }
	return axios.create(config)
}

export default instance
