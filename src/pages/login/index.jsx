import React, { useState } from "react";
import styles from "./login.module.css";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api";

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {   
        setLoading(true);
        const response = await axiosInstance.post('/auth/doctor/login', {...formData})
        // const response = await fetch(
        //   "http://localhost:5500/auth/doctor/login",
        //   {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         username: formData.username,
        //         password: formData.password
        //     })
        //   },
        // );
        const data = response.data;
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', data.token)
        navigate('/dashboard')
        window.location.reload();
    } catch (err) {
        const message = err.response.data.error;
        setErrMessage(message);
    } finally {
        setLoading(false)
    }
  };

  return (
    <>
        <div className={styles.body}>
      <h2 className={styles.title}>Please Login</h2>
      <div className={styles.inputs}>
        <Input
          value={formData.username}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, username: val }))
          }
          label={"Username"}
          type={"text"}
        />
        <Input
          value={formData.password}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, password: val }))
          }
          label={"Password"}
          type={"password"}
        />
      </div>
      <button className={`${styles.btn} ${loading? styles.loading : ''}`} onClick={handleSubmit}>{loading ? 'Loading...' : 'Login'}</button>
    </div>
    {
        errMessage ? <div className={styles.error}>{errMessage}
        <button onClick={() => setErrMessage(null)}>close</button>
  </div>  : null
    }
    </>
  );
};

export default Login;
