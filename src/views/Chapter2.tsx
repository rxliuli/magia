import '../styles/chapter2.less'
import { randomArray } from '../utils/randomArray'

export function Chapter2(props: { onNext: () => void }) {
  return (
    <div class={'chapter2'}>
      {/* <div class={'open-mask'}>
        <span></span>
        <span></span>
      </div>
      <div class={'word-box'}>
        <div class={'word'}></div>
        <div class={'mask'}></div>
      </div> */}
      {/* <div class={'word-shine'}>
        <span></span>
        <span></span>
      </div> */}
      <div class={'switch'}>
        {randomArray(8).map(() => (
          <span></span>
        ))}
      </div>
    </div>
  )
}
