import { useState } from "react"
import { random } from "./random"
import PropTypes from 'prop-types';
const notes =['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
const minStrg =1
const maxStrg =6 
export const Strings = ({min,max}) => {
  const [position, setPosition]=useState(0)
  const [strg, setStrg]=useState(1)

  return (
    <>
    <h1>Random Notes</h1>
    <button onClick={()=> {setPosition(random(min,max));setStrg(random(minStrg,maxStrg))}}>{notes[position]} {strg}</button>
    </>
  )
  
}
Strings.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}
