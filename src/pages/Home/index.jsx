import style from './style.module.css'
// React Wavify
import Wave from 'react-wavify'
// star

function Home(props) {
  return (
    <div>
      <div className={style.title_p}>
        <h1 className={style.title}>Hello!</h1>
        <p className={style.par}>We’re glad to see you</p>
      </div>
      <div className={style.buttons}>
        {/* redirct to login page */}
        <form action="/login" className={style.center}>
          <button className={style.loginButton}>Log-in</button>
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

export default Home
