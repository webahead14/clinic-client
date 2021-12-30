import style from "./style.module.css";
import Wave from "react-wavify";
function Login(props) {
  return (
    <div className={style.background}>
      <h1 className={style.title}>Login</h1>
      <div className={style.inputs}>
        <input
          type="text"
          className={style.usernameInput}
          placeholder="Id"
          required
        ></input>
        <br />
        <input
          type="password"
          className={style.passwordInput}
          placeholder="Passcode"
          required
        ></input>
        <br />
        <button className={style.loginButton}>Log-in</button>
      </div>
      <Wave
        className={style.waves}
        fill="#DAEDFF"
        paused={true}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 5,
        }}
      />
    </div>
  );
}

export default Login;
