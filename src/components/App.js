import React from 'react'
import '../styles/styles.css'

function App() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-gray-700 text-5xl font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-l to-red-600 from-yellow-400">
            React
          </span>
          {' + '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-700">
            TailwindCSS
          </span>
        </h1>
        <span className="text-lg text-gray-800">
          Minimal boilerplate, ready-to-use!
        </span>
      </div>
    </div>
  )
}

export default App
