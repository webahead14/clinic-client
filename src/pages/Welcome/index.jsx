import style from './style.module.css'
import { FormattedMessage } from 'react-intl'
// React Wavify
import Wave from 'react-wavify'
import logo from './logowide.png'
function Welcome(props) {
  return (
    <div>
      <div className={style.title_p}>
        <div className="logo">
          <img src={logo} alt="GrayMatters HealthLogo" width="50px" />
        </div>
        <h1 className={style.title}>
          <FormattedMessage id="WelcomeMassage" />
        </h1>
        <p className={style.par}>
          <FormattedMessage id="Welcome1Massage" />
        </p>
      </div>
      <div className={style.buttons}>
        {/* redirct to login page */}
        <form action="/login" className={style.center}>
          <button className={style.loginButton}>
            {' '}
            <FormattedMessage id="loginTitle" />
          </button>
        </form>
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

export default Welcome
