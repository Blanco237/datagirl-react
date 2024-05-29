import React, { useEffect, useState } from "react";
import styles from "./signin.module.css";

function SignIn() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    remember: false,
  })


  function handleUpdate (e) {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  function handleTargetedUpdate (field, value) {
    setFormData({...formData, [field] : value })
  }


  function handleSubmit() {
    if(password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log({ email, password, confirmPassword, remember })
  }

  return (
    <div className={styles.body}>
      <div className={styles.formContainer}>
        <h2>Sign UP</h2>
        <form>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={(e) => handleTargetedUpdate('fname', e.target.value)}
            value={formData.fname}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleUpdate}
            value={formData.lname}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleUpdate}
            value={formData.email}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleUpdate}
            value={formData.phone}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleUpdate}
            value={formData.password}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleUpdate}
            value={formData.confirmPassword}
          />
          <div>
            <label>
              <input
                type="checkbox"
                name="remember"
                onChange={handleUpdate}
                value={formData.remember}
              />{" "}
              Remember me
            </label>
          </div>
        </form>
      </div>
      <button className={styles.btn} onClick={handleSubmit}>Log In</button>
    </div>
  );
}

export default SignIn;
