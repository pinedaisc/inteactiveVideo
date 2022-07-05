import { useEffect, useRef, useState } from 'react'
import video from './assets/video/videoTest.mp4'
import './App.css'

function App() {
  // const video = 'https://youtu.be/F2wEf_alQzw'
  const videop = useRef(null)
  const currentTimeInput = useRef(null)
  const [play, setplay] = useState(false)




  // useEffect(() => {
  //   console.log(videop)
  //   videop.current.volume = 0.5
  // }, [])

  
  const handlePlaying = (e) => {
    // console.log('Current Time:', videop.current.currentTime)
    currentTimeInput.current.value = videop.current.currentTime
  }
  
  const sts = () => {
    videop.current.currentTime = 165.046074
  }
  
  const handlePlayPause = (e) => {
    if(play){
      videop.current.pause()
      console.log(e.target.html)
      e.target.value='play'
      //TODO 246583: como hacer que el texto del boton cambie?
    }else{
      videop.current.play()
      e.target.value='pause'
    }
    setplay(!play)
    
  }
  const seekminus = () => {
    videop.current.currentTime = videop.current.currentTime - 5
  }
  const seekplus = () => {
    videop.current.currentTime = videop.current.currentTime + 5
  }
  return (
    <>
      <div className="container">
        <video
          id='video'
          ref={videop}
          src={video}
          crossOrigin='true'
          width='100%'
          height='100%'
          controls
          onTimeUpdate={handlePlaying}
        />
        <div className="controlsInteractive">
          <div className="top">
          <div className="buttons"></div>
          <div className="buttons"></div>
          <div className="buttons"></div>
          </div>
          <div className="middle">
          <div className="buttons"></div>
          <div className="buttons"></div>
          <div className="buttons"></div>
          </div>
          <div className="bottom">
            <div className="buttons"></div>
            <div className="buttons"></div>
            <div className="buttons"></div>
          </div>
        </div>
      </div>
      <div className="controlsPanel">
        <button onClick={handlePlayPause}>play</button>
        <button onClick={seekminus}>-5</button>
        <button onClick={seekplus}>+5</button>
        <button onClick={sts}>"Sending to screen"</button>

        <div className="statusSection">
          <div className="col">
            <label htmlFor="currentTime">Current Time</label>
          </div>
          <div className="col">
            <input type="text" value='00:00' name="currentTime" id="currentTime" ref={currentTimeInput} />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
