import style from './style.module.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { showMessage } from '../../utils/functions'

// React Wavify.
import Wave from 'react-wavify'
import axios from 'axios'

const { REACT_APP_API_URL } = process.env

function Login(props) {
  const goTo = useNavigate()

  const [log, setLog] = useState(true)
  const [client, setClient] = useState({
    govId: '',
    passcode: '',
    email: '',
  })

  function fetchLogin(client) {
    axios
      .post(`${REACT_APP_API_URL}/api/client/login`, client)
      .then((res) => {
        window.localStorage.setItem('access_token', res.data.access_token)
        showMessage(`Welcome ${res.data.name}`, 'success')
        goTo('/home')
      })
      .catch((err) => {
        console.error(err)
        showMessage(err.response.data.message, 'error')
      })
  }
  function fetchPasscode(client) {
    axios
      .post(`${REACT_APP_API_URL}/api/client/getPasscode`, client)
      .then((res) => {
        showMessage(res.data.response, 'success')
        setLog(true)
      })
      .catch((err) => {
        console.error(err)
        showMessage(err.response.data.message, 'error')
      })
  }

  return (
    // titlehan
    <div className={style.background}>
      <h1 className={style.title}>
        <FormattedMessage id="loginTitle" />
      </h1>
      <div className={style.inputs}>
        {/* Id input */}
        <FormattedMessage id="loginPlaceholderID">
          {(id) => (
            <input
              type="text"
              className={style.idInput}
              placeholder={id}
              required
              onChange={(e) => {
                setClient({
                  ...client,
                  govId: e.target.value,
                })
              }}
            />
          )}
        </FormattedMessage>

        {/* Email input */}
        {!log ? (
          <FormattedMessage id="loginPlaceholderEmail">
            {(email) => (
              <input
                type="text"
                className={style.idInput}
                placeholder={email}
                required
                onChange={(e) => {
                  setClient({
                    ...client,
                    email: e.target.value,
                  })
                }}
              />
            )}
          </FormattedMessage>
        ) : null}

        {/* password input */}
        {log ? (
          <FormattedMessage id="loginPlaceholderPassword">
            {(password) => (
              <input
                type="password"
                className={style.passcodeInput}
                placeholder={password}
                required
                onChange={(e) =>
                  setClient({ ...client, passcode: e.target.value })
                }
              />
            )}
          </FormattedMessage>
        ) : null}

        <br />

        {/* login button or getPasscode button*/}
        {log ? (
          <button
            className={style.loginButton}
            onClick={() => {
              fetchLogin(client)
            }}
          >
            <FormattedMessage id="loginBtn" />
          </button>
        ) : (
          <button
            className={style.loginButton}
            onClick={() => {
              fetchPasscode(client)
            }}
          >
            <FormattedMessage id="loginGetPassocdeBtn" />
          </button>
        )}

        {/* get passcode or return to login*/}
        {log ? (
          <p
            className={style.loginchanger}
            onClick={(e) => {
              setLog(false)
            }}
          >
            <FormattedMessage id="loginGetPassocde" />
          </p>
        ) : (
          <p
            className={style.loginchanger}
            onClick={(e) => {
              setLog(true)
            }}
          >
            <FormattedMessage id="loginGoToLogin" />
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
