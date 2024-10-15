import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./RegisterPage.module.scss";
import { EmailIcon, LockIcon } from "../../assets/icons/loginRegisterIcons";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const password = watch("password");

  const handleGoogleSuccess = (response) => {
    console.log("Google sign-in successful:", response);
  };

  const handleGoogleFailure = (error) => {
    console.error("Google sign-in failed:", error);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.heading}>Register</h1>

          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <EmailIcon />
          </div>
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: {
                  pattern: (value) =>
                    /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])/.test(
                      value
                    ) ||
                    "Password must include a number, an uppercase letter, and a symbol",
                },
              })}
            />
            <LockIcon />
          </div>
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <LockIcon />
          </div>
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword.message}</p>
          )}

          <button
            type="submit"
            className={styles.loginBtn}
            disabled={!isValid || isLoading}
          >
            {isLoading && <span className={styles.spinner}></span>}
            {isLoading ? " Registering..." : "Register"}
          </button>

          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google Client ID
            buttonText="Sign up with Google"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy={"single_host_origin"}
            className={styles.googleBtn}
          />

          <div className={styles.links}>
            <Link to="/login">Already have an account</Link>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </Center>

      {successMessage && (
        <div className={styles.successMessage}>Successfully registered ✅</div>
      )}
    </div>
  );
}
