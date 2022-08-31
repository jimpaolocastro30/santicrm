import { CellContext } from '@tanstack/react-table'
import React from 'react'
import styled from 'styled-components'
import updateCustomer from '../../api/customer/put'
import Swal2 from '../../components/Swal2'

type InvitationCodeCellProps = {
	styles?: { container?: React.CSSProperties }
} & CellContext<CustomerProps, unknown>

const InvitationCodeCell = (props: InvitationCodeCellProps) => {
	const token: string | undefined = undefined
	const [code, setCode] = React.useState<string>(props.row.original.invitationCode)

	const handleClick = React.useCallback(async () => {
		const { isConfirmed, value } = await Swal2.fire<string>({
			input: 'text',
			inputPlaceholder: 'Code',
			showCancelButton: true,
			title: `${code ? 'Edit' : 'Add'} Invitation Code`,
			icon: 'info'
		})
		if (isConfirmed && value)
			updateCustomer(
				{
					...props.row.original,
					invitationCode: value
				},
				{ token }
			).then((success) => {
				if (success) setCode(value)
			})
	}, [code, props.row.original, token])

	return (
		<Container style={props.styles?.container}>
			<Button onClick={handleClick} type='button' style={{ color: code ? 'salmon' : 'dodgerblue' }}>
				{code || 'Add'}
			</Button>
		</Container>
	)
}

const Container = styled.div``

const Button = styled.button`
	padding: 10px;
	background-color: transparent;
	font-weight: 500;
`

export default InvitationCodeCell
