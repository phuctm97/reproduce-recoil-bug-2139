import { useState, useCallback } from 'react'
import { useRecoilCallback } from 'recoil'

const Counter = () => {
  const [error, setError] = useState()
  const doSomething = useRecoilCallback(() => async () => {
    throw new Error("Something went wrong.");
  }, []);
  const handleDoSomething = useCallback(async ()=>{
    try {
    await doSomething();
    } catch (e) {
      setError(e.message)
    }
  },[ setError])
  return (
    <div>
      <button onClick={handleDoSomething}>Do something</button>
      {error && <p>Error: {error}</p>}
    </div>
  )
}

export default Counter
