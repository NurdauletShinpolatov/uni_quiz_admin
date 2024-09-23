import styles from "./Login_page.module.scss";
import img from "../../Assets/Icons/email.png";
import lock from "../../Assets/Icons/lock.png";

function Login_page() {
  return (
    <div className={styles.logindiv}>
      <div className={styles.gradientdiv}>
        <div>
          <p>
            Welcome.
            <br /> Start your journey now with our quiz app!
          </p>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.loginForm}>
          <form>
            <h1>Login</h1>
            <div className={styles.input_box}>
              <input type="email" placeholder="" required />
              <label>Email:</label>
              <img src={img} />
            </div>
            <div className={styles.input_box}>
              <input type="password" placeholder="" required />
              <label>Password:</label>
              <img src={lock} />
            </div>
            <button type="submit">
              <p>Login</p>
            </button>
            <div className={styles.links}>
              <a href="">Create an account</a>
              <a href="">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_page;
