import styles from "./LoginPage.module.scss";
import { EmailIcon, LockIcon } from "../../assets/icons/loginRegisterIcons";
import { Center } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate()

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
            <Link to="/register" >Create an account</Link>
            <Link to="#">Forgot password?</Link>
          </div>
        </form>
      </Center>
    </div>
  );
}
