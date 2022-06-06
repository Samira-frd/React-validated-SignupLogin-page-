import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./Toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You've loged in successfully", "success");
      
    } else {
      notify("Invalid input", "error");
      setTouched({
        email: true,
        password: true
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>Login</h1>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            onChange={changeHandler}
            value={data.email}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            onChange={changeHandler}
            value={data.password}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/signup">Sign up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
