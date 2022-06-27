import { useReducer } from 'preact/hooks'
import { ChapterOpen } from './views/ChapterOpen'
import { Chapter1 } from './views/Chapter1'
import { Chapter2 } from './views/Chapter2'
import { Chapter3 } from './views/Chapter3'
import { ChapterHome } from './views/ChapterHome'
import { Music } from './views/Music'

export function App() {
  const [state, onNext] = useReducer<number, void>((i) => i + 1, 3)
  return (
    <>
      {state === 0 && <ChapterOpen onNext={onNext} />}
      {state === 1 && <Chapter1 onNext={onNext} />}
      {state === 2 && <Chapter2 onNext={onNext} />}
      {state === 3 && <Chapter3 onNext={onNext} />}
      {state === 4 && <ChapterHome />}
      <Music />
    </>
  )
}
