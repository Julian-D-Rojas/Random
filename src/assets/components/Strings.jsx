import { useState, useRef } from 'react'
import { random } from './random'
import PropTypes from 'prop-types'

const notes = ['C', 'C#', 'D', 'D#', 'Db', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B']
const minStrg = 1
const maxStrg = 6

export const Strings = ({ min, max }) => {
  const [position, setPosition] = useState(0)
  const [strg, setStrg] = useState(1)
  const [check, setCheck] = useState('off')
  const intervalRef = useRef(null)

  const auto = () => {
    setPosition(random(min, max))
    setStrg(random(minStrg, maxStrg))
  }
  const startAutoMode = () => {
    intervalRef.current = setInterval(() => {
      auto()
    }, 1000)
    console.log(`start ${intervalRef.current}`)
  }

  const stopAutoMode = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      console.log(`stop ${intervalRef.current}`)
      intervalRef.current = null
    }
  }
  const handleCheck = (e) => {
    if (check === 'off') {
      setCheck('on')
      startAutoMode()
    } else {
      setCheck('off')
      stopAutoMode()
      console.log(e.target.value)
    }
  }

  return (
    <>
      <h1>Random Notes</h1>
      <div className='Strings-div'>
        <button onClick={() => {
          auto()
        }}
        >{notes[position]} {strg}
        </button>
        <div className='Strings-div'>

          <input onClick={handleCheck} value={check} type='radio' className='Strings-input' />
          <p>Auto</p>
        </div>
      </div>
    </>
  )
}
Strings.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}
