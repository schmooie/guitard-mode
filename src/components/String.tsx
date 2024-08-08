import Fret, { NoteName } from "./Fret"
import { Range, Midi } from "tonal"
import { useState } from "react"

export interface StringProps {
  openNote: string
  hasBottomBorder: boolean
  numFrets?: number
}

export default function String({ numFrets = 12, openNote, hasBottomBorder }: StringProps) {
  const openNoteMidi = Midi.toMidi(openNote) ?? 10
  const notes = Range.numeric([openNoteMidi, openNoteMidi + numFrets])
  .map(note => Midi.midiToNoteName(note))
  const [activeFret, setActiveFret] = useState<NoteName>(undefined)

  const onFretClick = (clickedFret: NoteName) => {
    if (clickedFret === activeFret) {
      setActiveFret(undefined)
    } else {
      setActiveFret(clickedFret)
    }
  }

  return (
    <ul className={['flex', hasBottomBorder ? 'border-b-2' : null].join(' ')}>
      {notes.map((noteName, idx) =>
        <Fret key={idx} label={noteName} onClick={onFretClick} isActive={noteName === activeFret}/>
      )}
    </ul>
  )
}
