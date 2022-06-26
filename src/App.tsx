import { ChapterOpen } from './ChapterOpen'
import { useReducer } from 'preact/hooks'

export function App() {
  const [state, onNext] = useReducer<number, void>((i) => i + 1, 0)
  return <div>{state === 0 && <ChapterOpen onNext={onNext} />}</div>
}
