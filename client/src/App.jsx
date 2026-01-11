import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'

const App = () => {
  // This is for owner when owner route hit the navbar will be hidden.
  const isOwnerPath = useLocation().pathname.includes("owner")


  return (
    <div>
    {/* Condition to hide the navbar for owner route */}
    {!isOwnerPath && <Navbar />}
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App