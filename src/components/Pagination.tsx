import React from 'react'
import styled from 'styled-components'
import { BiChevronsLeft, BiChevronLeft, BiChevronRight, BiChevronsRight } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import TextField from './fields/TextField'

type PaginationProps = {
	styles?: { container?: React.CSSProperties }
} & PaginationExtraProps

type ButtonProps = {
	onClick?: () => any
	icon: JSX.Element
	name: 'Next Page' | 'Previous Page' | 'First Page' | 'Last Page'
}

export type PaginationExtraProps = {
	gotoPage: any
	nextPage: any
	previousPage: any
	canPreviousPage: boolean
	canNextPage: boolean
	pageCount: number
	pageIndex: number
}

// const regex = /(^[0-9]+$|^$)/

const Pagination = (props: PaginationProps) => {
	const handleNext = React.useCallback(() => {
		if (props.canNextPage) {
			props.nextPage()
		}
	}, [props])

	const handlePrevious = React.useCallback(() => {
		if (props.canPreviousPage) {
			props.previousPage()
		}
	}, [props])

	const items = React.useMemo<Array<ButtonProps>>(
		() => [
			{ icon: <BiChevronsLeft />, name: 'First Page', onClick: () => props.gotoPage(0) },
			{ icon: <BiChevronLeft />, name: 'Previous Page', onClick: handlePrevious },
			{ icon: <BiChevronRight />, name: 'Next Page', onClick: handleNext },
			{ icon: <BiChevronsRight />, name: 'Last Page', onClick: () => props.gotoPage(props.pageCount - 1) }
		],
		[props, handleNext, handlePrevious]
	)

	return (
		<IconContext.Provider value={{ size: '18px' }}>
			<Container style={props.styles?.container}>
				{items.map(({ icon, onClick, name }, i) => {
					if (i > 1) return null
					return (
						<Button onClick={onClick} key={name} title={name}>
							{icon}
						</Button>
					)
				})}
				<TextField
					inputProps={{
						style: { maxWidth: '5ch', border: 'thin solid #ddd', padding: '0 5px', textAlign: 'center' },
						value: String(props.pageIndex + 1),
						type: 'text',
						onChange: (e) => {
							let value = e.target.value.trim()
							if (value === '') return props.gotoPage(0)

							const re = /^[0-9\b]+$/
							// if value is not blank, then test the regex
							if (re.test(value)) props.gotoPage(parseInt(e.target.value) + 1)
						}
					}}
				/>
				{items.map(({ icon, onClick, name }, i) => {
					if (i <= 1) return null
					return (
						<Button onClick={onClick} key={name} title={name}>
							{icon}
						</Button>
					)
				})}
			</Container>
		</IconContext.Provider>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem 0;

	label {
		min-width: unset !important;
	}
`

const Button = styled.button`
	width: clamp(2rem, 3vw, 2.5rem);
	height: clamp(2rem, 3vw, 2.5rem);
	background-color: transparent;
`

export default Pagination
