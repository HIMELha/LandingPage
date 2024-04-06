import { useState } from 'react'
import './App.css'
import   styles   from './styles'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={`${styles.flexCenter}`}>
        <h1 className={`${styles.marginX} `}>Hello world</h1>
      </div>
    </>
  );
}

export default App
