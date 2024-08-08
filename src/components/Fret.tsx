export type NoteName = string | undefined
export interface FretProps {
  isActive: boolean
  label?: NoteName
  onClick?: (noteName: NoteName) => void
}

export default function Fret({
  isActive,
  label,
  onClick,
}: FretProps) {

  return (
    <li className="bg-gray-400 p-1 text-white border-r-2 w-1/6 flex items-center justify-center">
      <button className={["px-4 rounded-md", !isActive ? 'bg-black' : 'bg-green-400'].join(' ')} onClick={() => onClick && onClick(label)}>
        {label}
      </button>
    </li>
  )
}
