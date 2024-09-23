import styles from "./LoginPage.module.scss";
import { EmailIcon, LockIcon } from "../../assets/icons/loginRegisterIcons";
import { Center } from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.gradient}>
        <p>
          Welcome.
          <br />
          Start your journey now with our quiz app!
        </p>
      </div>
      <Center className={styles.right}>
        <form>
          <h1 className={styles.heading}>Login</h1>
          <div className={styles.inputBox}>
            <input type="email" placeholder="Email" required />
            <EmailIcon />
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder="Password" required />
            <LockIcon />
          </div>
          <button className={styles.loginBtn}>Login</button>
          <div className={styles.links}>
            <a href="#">Create an account</a>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </Center>
    </div>
  );
}
