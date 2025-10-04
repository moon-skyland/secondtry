'use client'

import { readSomething } from '../contract' 

export default function Home() {
  const handleClick = async () => {
    try {
      const data = await readSomething()
      alert('✨ Contract says: ' + String(data))
    } catch (e: any) {
      console.error(e)
      alert('❌ Failed: ' + (e?.message ?? e))
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: 16 }}>My dApp</h1>
        <button
          onClick={handleClick}
          style={{ padding: '10px 16px', fontSize: 16, cursor: 'pointer' }}
        >
          Read from Contract
        </button>
      </div>
    </main>
  )
}