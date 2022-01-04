import style from './style.module.css'
import React, { useState, useEffect } from 'react'
// React Wavify
import Wave from 'react-wavify'
import { useState } from 'react'
import axios from 'axios'

function Login(props) {
  const [client, setClient] = useState({
    gov_id: '',
    passcode: '',
  })
  const [error, setError] = useState(false)

  function fetchLogin() {
    axios
      .post('http://localhost:4000/api/client/login', client)
      .then((res) => {
        window.localStorage.setItem('access_token', res.data.access_token)
      })
      .catch((err) => {
        console.log(err)
        setError('Please Try Again')
      })
  }

  const [log, setLog] = useState(true)
  return (
    // titlehan
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
          className={style.passcodeInput}
          placeholder="Passcode"
          required
          onChange={(e) => setClient({ ...client, passcode: e.target.value })}
        />
        <br />
        {/* login button */}
        {error && <div className={style.error}>{error}</div>}

        <button
          className={style.loginButton}
          onClick={() => {
            fetchLogin()
          }}
        >
          Log-in
        </button>
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
