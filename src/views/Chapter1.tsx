import { useReducer } from 'preact/hooks'
import '../styles/chapter1.less'

function randomArray(count: number): number[] {
  return Array(count)
    .fill(0)
    .map((_, i) => i + 1)
}

export function Chapter1(props: { onNext: () => void }) {
  const [index, inc] = useReducer((s) => s + 1, 0) as [number, () => void]
  function onNext(e: JSX.TargetedAnimationEvent<HTMLSpanElement>) {
    if (e.animationName?.includes('hidden')) {
      inc()
      if (index === 4) {
        props.onNext()
      }
    }
  }
  const list = randomArray(5)
  return (
    <div class={`chapter1 bg${index}`}>
      {list.map((i) => (
        <div class={`word word${i}`}>
          <span onAnimationEnd={onNext}></span>
          {randomArray(7).map(() => (
            <span></span>
          ))}
        </div>
      ))}
    </div>
  )
}
