import styles from "./LoginPage.module.scss";
import { EmailIcon, LockIcon } from "../../assets/icons/loginRegisterIcons";

export default function LoginPage() {
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
              <EmailIcon />
            </div>
            <div className={styles.input_box}>
              <input type="password" placeholder="" required />
              <label>Password:</label>
              <LockIcon />
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
