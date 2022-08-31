import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.jpg'

type BrandProps = {
	styles?: { container?: React.CSSProperties }
}

const Brand = (props: BrandProps) => {
	return (
		<Container style={props.styles?.container}>
			<Image src={Logo} alt='cs30wallets' />
		</Container>
	)
}

const Container = styled.div``

const Image = styled.img`
	width: 128px;
	height: 128px;
`

export default Brand
