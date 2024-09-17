import { useState } from 'react'
import './App.css'
import Guitar, { getRenderFingerSpn } from 'react-guitar'
import { standard } from 'react-guitar-tunings'
// import useSound from 'react-guitar-sound'
import { Chord } from 'tonal'
import Metronome from './components/Metronome'

const triad = Chord.degrees("Cm");
[1, 2, 3].map(triad); // => ["C", "Eb", "G"];
[2, 3, 1].map(triad); // => ["Eb", "G", "C"];
[3, 1, 2].map(triad); // => ["G", "C", "Eb"];

function App() {
  const [strings, setStrings] = useState([0, 1, 2, 2, 0, -1])
  // const { play, strum } = useSound({ fretting: strings, tuning: standard })

  return (
    <>
      <Guitar strings={strings} renderFinger={getRenderFingerSpn(standard)} onChange={setStrings}/>
      <Metronome />
    </>
  )
}

export default App
