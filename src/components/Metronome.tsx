export interface MetronomePropTypes {
  bpm: number,
  setBpm: (number: number) => void,
  isPlaying: boolean,
  setIsPlaying: (isPlaying: boolean) => void,
  minBpm?: number,
  maxBpm?: number,
}

export default function Metronome({
  bpm = 80,
  minBpm = 0,
  maxBpm = 200,
  isPlaying,
  setIsPlaying,
  setBpm,
}: MetronomePropTypes) {

  const togglePlay = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  }

  return (
    <form className="p-2 flex items-center" onSubmit={togglePlay}>
      <label className="flex items-center">
        <span className="font-semibold text-2xl">BPM:&nbsp;</span>
        <input
          type="number"
          value={bpm}
          min={minBpm}
          max={maxBpm}
          onChange={(e) => setBpm(parseInt(e.target.value, 10))}
          className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </label>
      <button
        type="submit"
        className="ml-2 text-sm bg-red-400 active:bg-red-500"
        onClick={togglePlay}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </form>
  )
}
