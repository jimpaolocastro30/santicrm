/// <reference types="react-scripts" />

type CustomerProps = {
	firstName: string
	lastName: string
	middleName: string
	address: string
	mobileNumber: string
	landlineNumber: string
	cardNumberSuffix: string
	status: AccountStatus
	invitationCode: string
	_id?: string
}

type APICustomerProps = {
	_id?: string
	firstName?: string
	middleName?: string
	lastName?: string
	Address?: string
	mobileNumber?: string
	landlineNumber?: string
	lastFourDigitCC?: string
	status?: string
	DateCreated?: Date
	__v?: number
	invitationCode?: string
}

type WithToken = { token?: string }

type AccountStatus = 'verified' | 'unverified'
