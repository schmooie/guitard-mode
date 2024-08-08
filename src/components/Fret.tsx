export interface FretProps {
  isDotted?: boolean
  label?: string,
  onClick?: () => void
}



export default function Fret({
  isDotted = false,
  label,
  onClick
}: FretProps) {
  return (
    <li className="bg-gray-400 p-1 text-white border-r-2 w-1/6 flex items-center justify-center">
      <button className="px-4 rounded-md bg-black" onClick={onClick}>
        {isDotted ? '*' : label ?? 'E'}
      </button>
    </li>
  )
}
