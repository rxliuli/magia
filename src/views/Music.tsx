import { useReducer, useRef } from 'preact/hooks'
import '../styles/music.less'

export function Music() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [state, next] = useReducer<'play' | 'pause', void>((s) => {
    const next = s === 'pause' ? 'play' : 'pause'
    if (next === 'play') {
      audioRef.current!.play()
    } else {
      audioRef.current!.pause()
    }
    return next
  }, 'pause') as ['play' | 'pause', () => void]
  return (
    <div class={`music ${state}`} onClick={next}>
      <audio
        class={'hide'}
        ref={audioRef}
        src={'https://cdn.jsdelivr.net/npm/cyris-music-cdn/Kalafina_Magia.mp3'}
      ></audio>
    </div>
  )
}
