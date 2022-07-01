import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './pages/userList/UserList'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App