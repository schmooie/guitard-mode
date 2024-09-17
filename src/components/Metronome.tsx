import { useEffect, useState } from "react"

export interface MetronomePropTypes {
  initialBpm?: number,
  minBpm?: number,
  maxBpm?: number,
}

const SECONDS_IN_MINUTE = 60;
const MS_IN_SECOND = 1000;

export default function Metronome({
  initialBpm = 80,
  minBpm = 0,
  maxBpm = 200,
}: MetronomePropTypes) {
    const [bpm, setBpm] = useState(initialBpm);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      if (!isPlaying) {
        return;
      }

      const beepEveryMs = SECONDS_IN_MINUTE / bpm * MS_IN_SECOND;
      const click = new Audio('public/Synth_Tick_C_lo.wav');

      const intervalId = setInterval(() => {
        click.play();
      }, beepEveryMs);

      return () => clearInterval(intervalId);
    }, [bpm, isPlaying])

  return (
    <section className="p-2 flex items-center">
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
        className="bg-red-400 active:bg-red-500"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </section>
  )
}
