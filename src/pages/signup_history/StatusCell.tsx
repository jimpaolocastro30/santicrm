import { CellContext } from '@tanstack/react-table'
import React from 'react'
import styled from 'styled-components'
import ReactSelect from 'react-select'
import updateCustomer from '../../api/customer/put'

type StatusCellProps = {
	styles?: { container?: React.CSSProperties }
} & CellContext<CustomerProps, unknown>

const StatusCell = (props: StatusCellProps) => {
	let token: string | undefined = undefined
	const options = React.useMemo<Array<{ label: string; value: AccountStatus }>>(
		() => [
			{
				label: 'Verified',
				value: 'verified'
			},
			{
				label: 'Unverified',
				value: 'unverified'
			}
		],
		[]
	)

	return (
		<Container style={props.styles?.container}>
			<ReactSelect
				options={options}
				defaultValue={options.filter((o) => o.value === props.row.original.status)[0]}
				styles={{
					singleValue: (base, props) => ({
						...base,
						color: props.data.value === 'verified' ? 'forestgreen' : '#555'
					}),
					control: (base) => ({
						...base,
						border: 'none'
					}),
					indicatorSeparator: (base) => ({
						display: 'none'
					})
				}}
				isSearchable={false}
				onChange={(newValue) => {
					if (newValue?.value) {
						updateCustomer(
							{
								...props.row.original,
								status: newValue.value
							},
							{ token }
						)
					}
				}}
			/>
		</Container>
	)
}

const Container = styled.div`
	max-width: 140px;
	margin: 0 auto;
`

export default StatusCell
