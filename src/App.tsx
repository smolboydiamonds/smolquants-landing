import React from 'react'
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home'

const AppWrapper = styled.div`
  display: flex;
  background: #000000;
  color: #ffffff;
  min-height: 100vh;
  min-width: 100vw;
`

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
