import React from 'react'
import { useEffect, useState, useRef } from "react"

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div className="App">
      <h1>My Full Page</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </div>
  )

}

export default App
