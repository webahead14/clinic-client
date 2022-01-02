import style from './style.module.css'
// React Wavify
import Wave from 'react-wavify'
import { useState, useRef } from 'react'
import axios from 'axios'

function Login(props) {
  const [client, setClient] = useState({
    gov_id: '',
    passcode: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function fetchLogin() {
    setLoading(true)
    axios.post('http://localhost:4000/api/client/login', client).then((res) => {
      setLoading(false)
      if (!res.data) {
        setError('error with fetch')
      } else {
        window.localStorage.setItem('access_token', res.data.access_token)
      }
    })
  }

  return (
    // titlehan
    <div className={style.background}>
      <h1 className={style.title}>Login</h1>
      <div className={style.inputs}>
        {/* Id input */}
        <input
          type="text"
          className={style.idInput}
          placeholder="Id"
          required
          onChange={(e) => setClient({ ...client, gov_id: e.target.value })}
        />
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

        <button
          className={style.loginButton}
          onClick={() => {
            fetchLogin()
          }}
        >
          Log-in
        </button>
        {/* login by email */}
        <a href="" className={style.loginchanger}>
          Login By Email
        </a>
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
