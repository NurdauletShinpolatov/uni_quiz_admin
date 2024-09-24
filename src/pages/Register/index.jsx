import styles from "./Register.module.scss";
import { EmailIcon, LockIcon } from "../../assets/icons/loginRegisterIcons";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
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
          <h1 className={styles.heading}>Register</h1>
          <div className={styles.inputBox}>
            <input type="email" placeholder="Email" required />
            <EmailIcon />
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder="Password" required />
            <LockIcon />
          </div>
          <button className={styles.loginBtn}>Register</button>
          <div className={styles.links}>
            <Link to="/login" >Already have an account</Link>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </Center>
    </div>
  );
}
