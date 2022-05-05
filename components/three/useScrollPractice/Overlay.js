import ReactDOM from 'react-dom'

export default function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
          <h1 className="font-extrabold text-3xl text-center">asdfa</h1>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          pmnd.rs
          <br />
          asdfasdfasdfasdfasdf
        </a>
        <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>asdfasdf —</div>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>06/10/2021</div>
      </div>
    )
  }