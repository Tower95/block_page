import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  // document.createElement('div')
  return <div>Hello World</div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)