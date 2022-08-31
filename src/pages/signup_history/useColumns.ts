import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import InvitationCodeCell from './InvitationCodeCell'
import StatusCell from './StatusCell'

type Props = {
	columns: Array<ColumnDef<CustomerProps>>
}

const useColums = (): Props => {
	const columns = React.useMemo<Array<ColumnDef<CustomerProps>>>(
		() => [
			{
				accessorKey: 'firstName',
				header: 'First Name'
			},
			{
				accessorKey: 'middleName',
				header: 'Middle Name'
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name'
			},
			{
				accessorKey: 'address',
				header: 'Address'
			},
			{
				accessorKey: 'landlineNumber',
				header: 'Landline Number'
			},
			{
				accessorKey: 'mobileNumber',
				header: 'Mobile Number'
			},
			{
				accessorKey: 'invitationCode',
				header: 'Invitation Code',
				cell: InvitationCodeCell
			},
			{
				accessorKey: 'status',
				header: 'Status',
				cell: StatusCell,
				enableResizing: false
			}
		],
		[]
	)

	return { columns }
}

export default useColums
