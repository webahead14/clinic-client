import style from './style.module.css'
import React, { useState, useEffect } from 'react'
// React Wavify
import Wave from 'react-wavify'

function Login(props) {
  const [log, setLog] = useState(true)
  return (
    // title
    <div className={style.background}>
      <h1 className={style.title}>Login</h1>
      <div className={style.inputs}>
        {/* Id input */}
        {log ? (
          <input
            type="text"
            className={style.usernameInput}
            placeholder="Id"
            required
          />
        ) : (
          <input
            type="text"
            className={style.usernameInput}
            placeholder="Email"
            required
          />
        )}
        {/* password input */}
        <input
          type="password"
          className={style.passwordInput}
          placeholder="Passcode"
          required
        />
        <br />
        {/* login button */}
        <button className={style.loginButton}>Log-in</button>
        {/* login by email */}
        {log ? (
          <p
            className={style.loginchanger}
            onClick={(e) => {
              setLog(false)
            }}
          >
            Login By Email
          </p>
        ) : (
          <p
            className={style.loginchanger}
            onClick={(e) => {
              setLog(true)
            }}
          >
            Login By Id
          </p>
        )}
      </div>
      {/* React Wavify */}
      <Wave
        className={style.waves}
        fill="#DAEDFF"
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

export default Login
