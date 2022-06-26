import '../styles/chapter-open.less'

export function ChapterOpen(props: { onNext: () => void }) {
  return (
    <div class={'chapter-open'}>
      <div class={'bg'}>
        <div class={'bg1'}>
          <span></span>
          <span></span>
        </div>
        <div class={'bg2'}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class={'lines'}>
        <div class={'top'}></div>
        <div class={'bottom'}></div>
      </div>
      <div class={'ball'}>
        <span></span>
        <span></span>
      </div>
      <div class={'title'}>
        <div class={'item-box'}>
          <div class={'item'}>
            <div class={'mo'}></div>
          </div>
          <div class={'item'}>
            <div class={'nv'}></div>
            <div class={'fa'}></div>
          </div>
        </div>
        <div class={'wrap'}>
          <div class={'item'}></div>
          <div class={'item'}></div>
          <div class={'item'}></div>
          <div class={'item'}></div>
        </div>
      </div>
      <div class={'switch'}>
        <div class={'balls'}>
          <span></span>
          <span></span>
        </div>
        <div class={'balls'}>
          <span></span>
          <span></span>
        </div>
        <div class={'balls'}>
          <span></span>
          <span></span>
        </div>
        <div class={'balls'}>
          <span></span>
          <span></span>
        </div>
        <div class={'rotate'} onAnimationEnd={props.onNext}></div>
      </div>
    </div>
  )
}
