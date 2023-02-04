import React from 'react'
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Clients from './pages/Clients'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #000000;
  color: #ffffff;
  min-height: 100vh;
  min-width: 100vw;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
      <Footer />
    </AppWrapper>
  )
}

export default App
