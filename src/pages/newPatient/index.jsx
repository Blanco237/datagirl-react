import React, { useState } from "react";
import styles from "./new.module.css";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api";

const NewPatient = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    address: "",
    sex: "",
    bloodgroup: "",
    email: ""
  });
  const [errMessage, setErrMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const doctor = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = async () => {
    try {   
        setLoading(true);
        const response = await axiosInstance.post('/patient/add', {...formData, doctor_id: doctor.doctor_id})
        const data = response.data;
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
          value={formData.first_name}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, first_name: val }))
          }
          label={"First Name"}
          type={"text"}
        />
        <Input
          value={formData.last_name}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, last_name: val }))
          }
          label={"Last Name"}
          type={"text"}
        />
        <Input
          value={formData.dob}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, dob: val }))
          }
          label={"Date of Birth"}
          type={"date"}
        />
        <Input
          value={formData.address}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, address: val }))
          }
          label={"Address"}
          type={"text"}
        />
        <Input
          value={formData.sex}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, sex: val }))
          }
          label={"Sex"}
          type={"text"}
        />
        <Input
          value={formData.bloodgroup}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, bloodgroup: val }))
          }
          label={"Blood Group"}
          type={"text"}
        />
        <Input
          value={formData.email}
          setValue={(val) =>
            setFormData((prev) => ({ ...prev, email: val }))
          }
          label={"Email"}
          type={"text"}
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

export default NewPatient;
