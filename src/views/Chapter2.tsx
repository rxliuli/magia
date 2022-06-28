import '../styles/chapter2.less'
import { randomArray } from '../utils/randomArray'

export function Chapter2(props: { onNext: () => void }) {
  return (
    <div class={'chapter2'}>
      <div class={'open-mask'}>
        <span></span>
        <span></span>
      </div>
      <div class={'word-box'}>
        <div class={'word'}></div>
        <div class={'mask'}></div>
      </div>
      <div class={'word-shine'}>
        <span></span>
        <span></span>
      </div>
      <div class={'switch'}>
        {randomArray(10).map(() => (
          <span></span>
        ))}
      </div>
      <div class={'close'}>
        <div class={'stone-wave'}></div>
        <div class={'stone'}></div>
        <div class={'mask1'}></div>
        <div class={'mask2'} onAnimationEnd={props.onNext}></div>
      </div>
    </div>
  )
}
