import { randomArray } from '../utils/randomArray'
import '../styles/chapter3.less'

export function Chapter3(props: { onNext: () => void }) {
  const spans = randomArray(8).map(() => <span />)
  return (
    <div class={'chapter3'}>
      <div class={'open1'}>{spans}</div>
      <div class={'character-box1'}>
        <div class={'character'}></div>
        <div class={'mask1'}></div>
        <div class={'mask2'}></div>
      </div>

      <div class={'open2'}>{spans}</div>
      <div class={'character-box2'}>
        <div class={'character'}></div>
        <div class={'mask1'}></div>
        <div class={'mask2'}></div>
      </div>

      <div class={'open3'}>{spans}</div>
      <div class={'character-box3'}>
        <div class={'character'}></div>
        <div class={'mask1'}></div>
        <div class={'mask2'}></div>
      </div>

      <div class={'open4'}>{spans}</div>
      <div class={'character-box4'}>
        <div class={'character'}></div>
        <div class={'mask1'}></div>
        <div class={'mask2'}></div>
      </div>

      <div class={'open5'}>
        <div class={'group1'}>{spans}</div>
        <div class={'group2'}>{spans}</div>
      </div>
      <div class={'character-box5'}>
        <div class={'character'}></div>
        <div class={'mask1'}></div>
        <div class={'mask2'}></div>
      </div>

      <div class={'close-box'}>
        {spans.slice(0, 3)}
        <span onAnimationEnd={props.onNext}></span>
      </div>
    </div>
  )
}
