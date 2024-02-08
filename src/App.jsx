import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer'>
      <div className='container'>
        <main className='main'>
          {/* <img src='../public/images/avatar-jessica.jpeg' className='main--avatar' alt='avatar' /> */}
          <img src='./public/images/profile2.jpg' className='main--avatar' alt='avatar' />
          <h1 className='main--title'>Ayca Gurler</h1>
          {/* <h1 className='main--title'>Jessica Randall</h1> */}
          <span className='main--location'>Izmir, Turkey</span>
          {/* <span className='main--location'>London, United Kingdom</span> */}
          <p className='main--info'>"Front-end developer and avid reader."</p>
          <div className='main--buttons'>
            <a href="https://github.com/aybegu" className='main--links'>
              <button className='main--button'>GitHub</button>
            </a>
            <a href="https://www.frontendmentor.io/profile/aybegu" className='main--links'>
              <button className='main--button'>Frontend Mentor</button>
            </a>
            <a href="https://www.linkedin.com/in/ay%C3%A7a-berfin-g%C3%BCrler-568537249/" className='main--links'>
              <button className='main--button'>LinkedIn</button>
            </a>
            <a href="https://github.com/aybegu" className='main--links'>
              <button className='main--button'>Twitter</button>
            </a>
            <a href="https://www.instagram.com/aycabgurler/" className='main--links'>
              <button className='main--button'>Instagram</button>
            </a>
          </div>
        </main>
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/aybegu">Ayca Berfin Gurler</a>.
      </div>
    </div>

  )
}

export default App
