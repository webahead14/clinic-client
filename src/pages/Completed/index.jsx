import style from './style.module.css'
import React from 'react'

// React Wavify
import Wave from 'react-wavify'
import Check from './check.png'

function Completed(props) {
  return (
    <div>
      <br />
      <br />
      <img src={Check} alt="check" width="100px" />
      <p className={style.title}>
        Your survey has been successfully submitted.
      </p>
      <br />
      <p className={style.title}>Thank you for your time.</p>
      {/* redirct to home page */}
      <form action="/home" className={style.center}>
        <button className={style.back}>Back</button>
      </form>
      {/* React Wavify */}
      <Wave
        className={style.waves}
        fill="#8abeee"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.1,
          points: 5,
        }}
      />
    </div>
  )
}

export default Completed
