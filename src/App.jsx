import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import axios from 'axios'

import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Survey from './pages/Survey'
import Home from './pages/Home'
function App() {
  const location = useLocation()

  // Just an axios example
  // useEffect(() => {
  //   axios.get(url)
  //     .then((res) => {
  //       res.data <- no need to JSON.parse the response
  //     })
  //     .catch()

  //   axios.post(url, { body: {} }) <- no need to JSON.stringify the body
  //     .then((res) => {
  //       res.data
  //     })
  //     .catch()
  // }, [])

  if (location.pathname === '/login') {
    return <Login />
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
