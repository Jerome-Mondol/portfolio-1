import React from 'react'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
  return (
    <div className='bg-dark h-auto inset-shadow-sm' >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:name" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
