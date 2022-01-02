import style from "./style.module.css";
// React Wavify
import Wave from "react-wavify";

function Login(props) {
  return (
    // title
    <div className={style.background}>
      <h1 className={style.title}>Login</h1>
      <div className={style.inputs}>
        {/* Id input */}
        <input
          type="text"
          className={style.usernameInput}
          placeholder="Id"
          required
        ></input>
        <br />
        {/* password input */}
        <input
          type="password"
          className={style.passwordInput}
          placeholder="Passcode"
          required
        ></input>
        <br />
        {/* login button */}
        <button className={style.loginButton}>Log-in</button>
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
  );
}

export default Login;
