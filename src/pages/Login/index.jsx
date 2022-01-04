import style from './style.module.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

// React Wavify
import Wave from 'react-wavify'
import axios from 'axios'

function Login(props) {
  const goTo = useNavigate()

  const [client, setClient] = useState({
    gov_id: '',
    passcode: '',
    email: '',
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
  function fetchLoginByEmail() {
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
            className={style.idInput}
            placeholder="Id"
            required
            onChange={(e) =>
              setClient({ ...client, gov_id: e.target.value, email: undefined })
            }
          />
        ) : (
          <input
            type="text"
            className={style.idInput}
            placeholder="Email"
            required
            onChange={(e) =>
              setClient({ ...client, email: e.target.value, gov_id: undefined })
            }
          />
        )}
        {/* password input */}
        {log ? (
          <input
            type="password"
            className={style.passcodeInput}
            placeholder="Passcode"
            required
            onChange={(e) => setClient({ ...client, passcode: e.target.value })}
          />
        ) : null}

        <br />
        {/* login button */}
        {error && <div className={style.error}>{error}</div>}
        {log ? (
          <button
            className={style.loginButton}
            onClick={() => {
              fetchLogin()
            }}
          >
            Log-in
          </button>
        ) : (
          <button
            className={style.loginButton}
            onClick={() => {
              fetchLoginByEmail()
              goTo('/passcodeByEmail')
            }}
          >
            Send Passcode to Email
          </button>
        )}

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
