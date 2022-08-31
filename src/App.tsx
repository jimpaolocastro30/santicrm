import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import SignUpPage from './pages/signup/SignUpPage'
import SignUpHistoryPage from './pages/signup_history/SignUpHistoryPage'

type AppProps = {
	styles?: { container?: React.CSSProperties }
}

const App = (props: AppProps) => {
	return (
		<Container style={props.styles?.container}>
			<Routes>
				<Route path='registration' element={<SignUpPage />} />
				<Route path='registration-history' element={<SignUpHistoryPage />} />

				<Route path='*' element={<Navigate replace to='registration' />} />
			</Routes>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1920px;
	margin: 0 auto;
`

export default App
