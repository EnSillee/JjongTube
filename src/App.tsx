// import { useState } from 'react'
import belugaLogo from './assets/beluga.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://covi-ensil.github.io/MenuExplorer/" target="_blank">
          <img src={belugaLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Welcome to Dancing Beluga's Site</h1>
      {/* <h3>{count}</h3> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count -
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Dancing Beluga logo to explore site
      </p>
    </>
  )
}

export default App
