import String from "./String"

export interface InstrumentPropTypes {
  notesForStrings: Array<string>
  dottedFretIndices?: Array<number>
  numFrets?: number
}

export default function Instrument({
  // dottedFretIndices = [3, 5, 7, 9, 12],
  numFrets = 12,
  notesForStrings }: InstrumentPropTypes) {


  return (
    <section>
      {notesForStrings.map((_, idx) =>
        <String key={idx} hasBottomBorder={idx + 1 !== notesForStrings.length} numFrets={numFrets} openNote={notesForStrings[idx]} />
      )}
    </section>
  )
}
