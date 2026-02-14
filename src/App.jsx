import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Course from './pages/Course'
import Courses from './Dynamic/Courses'
import Workshop from './pages/Workshop'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Course />} />
      <Route path="/course/:id" element={<Courses />} />
      <Route path="/workshops" element={<Workshop />} />
    </Routes>
  )
}

export default App