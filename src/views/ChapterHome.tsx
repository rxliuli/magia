import { useEffect, useMemo, useReducer, useState } from 'preact/hooks'
import '../styles/chapter-home.less'
import { randomArray } from '../utils/randomArray'

type Color = 'pink' | 'yellow' | 'red' | 'blue' | 'purple'
const colors: Color[] = ['yellow', 'red', 'blue', 'pink', 'purple']

function useColor(): [Color, () => void] {
  const [i, setI] = useState(0)
  const color = useMemo(() => colors[i], [i])
  function next() {
    setI(i + 1 === colors.length ? 0 : i + 1)
  }
  return [color, next]
}

export function ChapterHome() {
  const [color, next] = useColor()

  return (
    <div class={'chapter-home'}>
      <div class={'outer-frame'}>
        {randomArray(4).map((i) => (
          <span key={`bg-${i}-${color}`} class={`bg-${color} line-${i}`} />
        ))}
      </div>
      <div class={'inner-frame'}>
        {randomArray(4).map((i) => (
          <span key={`bg-${i}-${color}`} class={`bg-${color} line-${i}`} />
        ))}
        <div class={'rings'}>
          <div class={`decoration color-${color}`}></div>
          <div class={`main color-${color}`}>
            <div class={'logo'}></div>
            <div
              key={`avatar-${color}`}
              class={'avatar'}
              onAnimationEnd={(e) => {
                if (e.animationName.includes('hide')) {
                  next()
                }
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
