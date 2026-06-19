import { useState } from 'react'

export default function App() {
  const [status, setStatus] = useState(null)

  const runCheck = () => setStatus(1 + 1 === 2)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', marginTop: '4rem' }}>
      <h1>Test App (React)</h1>
      <button onClick={runCheck}>Run smoke test</button>
      {status !== null && (
        <p style={{ color: status ? 'green' : 'red' }}>
          {status ? 'OK: app is working' : 'FAIL'}
        </p>
      )}
    </div>
  )
}
