import React from 'react'
import styled from 'styled-components'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import useColums from './useColumns'
import useData from './useData'
import Pagination from '../../components/Pagination'

type SignUpHistoryPageTableProps = {
	styles?: { container?: React.CSSProperties }
}

const SignUpHistoryPageTable = (props: SignUpHistoryPageTableProps) => {
	const token: string | undefined = undefined
	const { columns } = useColums()
	const { data } = useData({ token })

	const {
		getHeaderGroups,
		getRowModel,
		getCanNextPage,
		getCanPreviousPage,
		setPageIndex,
		nextPage,
		previousPage,
		getPageCount,
		getState
	} = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel()
	})

	return (
		<Container style={props.styles?.container}>
			<table>
				<thead>
					{getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder ? null : (
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												position: 'relative',
												cursor: 'pointer'
											}}
											onClick={header.column.getToggleSortingHandler()}
										>
											{flexRender(header.column.columnDef.header, header.getContext())}
											{header.column.getIsSorted() && (
												<SorterContainer>
													<TiArrowSortedUp color={header.column.getIsSorted() === 'desc' ? '#aaa' : '#333'} />
													<TiArrowSortedDown
														color={header.column.getIsSorted() === 'desc' ? '#aaa' : '#333'}
														style={{
															transform: 'translateY(-5px)'
														}}
													/>
												</SorterContainer>
											)}
										</div>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				canNextPage={getCanNextPage()}
				canPreviousPage={getCanPreviousPage()}
				gotoPage={setPageIndex}
				nextPage={nextPage}
				pageCount={getPageCount()}
				pageIndex={getState().pagination.pageIndex}
				previousPage={previousPage}
			/>
		</Container>
	)
}

const Container = styled.div`
	border: thin solid #ddd;
	border-radius: 5px;

	table {
		padding: 2rem;
		width: 100%;
		margin-bottom: 2rem;

		th,
		td {
			text-align: center;
		}
	}
`

const SorterContainer = styled.div`
	flex-direction: column;
	margin-left: 1ch;
	display: flex;
	transform: translateY(-50%);
	position: absolute;
	top: 50%;
	right: 0;
`

export default SignUpHistoryPageTable
