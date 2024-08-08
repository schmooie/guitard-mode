import Fret from "./Fret"

export interface StringProps {
  numFrets?: number
  dottedFretIndices?: number[]
}

export default function String({ numFrets = 12, dottedFretIndices = [3, 5, 7, 9, 12] }: StringProps) {
  const dottedSet = new Set(dottedFretIndices);

  return (
    <ul className="flex">
      {new Array(numFrets).fill(0).map((_, idx) =>
        <Fret key={idx} isDotted={dottedSet.has(idx + 1)} />
      )}
    </ul>
  )
}
