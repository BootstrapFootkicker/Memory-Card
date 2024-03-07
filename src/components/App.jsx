import { useState } from 'react'
import '..//styles/App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello, Vite!</h1>
        <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
        </button>
    </>
  )
}


