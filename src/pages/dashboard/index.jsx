import React, { useEffect, useState } from "react";
import axiosInstance from "../../api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const doctor = JSON.parse(localStorage.getItem("user"));
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if(!doctor?.doctor_id) {
      navigate('/auth')
      return
    }

    const fetchPatients = async () => {
      const response = await axiosInstance.get("/doctor/patients");
      const data = response.data;
      console.log(data);
      setPatients(data);
    };

    fetchPatients();
  }, []);



  return (
    <>
      <div>
        Dashboard for {doctor?.first_name} {doctor?.last_name}
        
      </div>
      {patients.length > 0 ? (
        <ul>
            <h2>PATIENTS - <button onClick={() => navigate('/dashboard/new')}>Add New</button></h2>
            <br />
          {patients.map((patient) => {
            return (
              <li>
                {patient.first_name}, {patient.last_name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Dashboard;
