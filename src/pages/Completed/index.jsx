import style from './style.module.css'
import React from 'react'
import { FormattedMessage } from 'react-intl'
// React Wavify
import Wave from 'react-wavify'
import Check from './check.png'

function Completed(props) {
  return (
    <div>
      <br />
      <br />
      <img src={Check} alt="check" width="100px" className={style.check} />
      <br />
      <br />
      <p className={style.title}>
        <FormattedMessage id="Thankyou" />
      </p>
      <br />
      <br />
      {/* redirct to home page */}
      <form action="/home" className={style.center}>
        <button className={style.back}>
          <FormattedMessage id="Back" />
        </button>
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
