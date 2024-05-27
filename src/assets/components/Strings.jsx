import { useState } from "react"
import { random } from "./random"
import PropTypes from 'prop-types';
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const minStrg = 1
const maxStrg = 6
export const Strings = ({ min, max }) => {
  const [position, setPosition] = useState(0)
  const [strg, setStrg] = useState(1)
  //const [isChecked, setIsChecked]= useState(false)

//()=>{console.log()} implementar funcion timesGap en while revisando el check del radio

  const auto = ()=>{ setPosition(random(min, max))
    setStrg(random(minStrg, maxStrg))}

  return (
    <>
      <h1>Random Notes</h1>
      <div className="Strings-div">
        <button onClick={() => {
          auto()
         // isAuto = true
        }}>{notes[position]} {strg}</button>

        <div className="Strings-div">
        {console.log(<input type="radio" className="Strings-input" />)}
        <input type="radio" className="Strings-input" />
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
