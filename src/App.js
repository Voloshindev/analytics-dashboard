import React, { useState, useEffect } from 'react'
import Monitor from './components/Monitor'
import EventEmitter from './utils'
import './App.css'

const initialValue = [
  {
    title: 'Temperature',
    value: '0',
  },
  {
    title: 'Air pressure',
    value: '0',
  },
  {
    title: 'Humidity',
    value: '0',
  },
]

function App() {
  const emitter = new EventEmitter()
  const [screenData, setScreenData] = useState(initialValue)

  useEffect(() => {
    emitter.on('data', val =>
      setScreenData(oldArray =>
        oldArray.map(el =>
          val.title === el.title ? { title: el.title, value: val.value } : el
        )
      )
    )
  }, []) // eslint-disable-line

  return (
    <div className="App">
      <header className="App-header">
        {screenData.map((el, i) => (
          <Monitor key={i} data={el} />
        ))}
      </header>
    </div>
  )
}

export default App
