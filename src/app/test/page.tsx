"use client"

export default function TestPage() {

  const runTest = async () => {
    const res = await fetch("/api/scan", {
      method: "POST"
    })

    const data = await res.json()
    console.log(data)
    alert(JSON.stringify(data))
  }

  return (
    <div style={{padding:40}}>
      <h1>API Test</h1>
      <button onClick={runTest}>
        Scan API testen
      </button>
    </div>
  )
}