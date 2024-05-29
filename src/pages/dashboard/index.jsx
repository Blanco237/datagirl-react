import React, { useEffect, useState } from "react";
import axiosInstance from "../../api";

const Dashboard = () => {
  const doctor = JSON.parse(localStorage.getItem("user"));
  const [patients, setPatients] = useState([]);

  useEffect(() => {
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
        Dashboard for {doctor.first_name} {doctor.last_name}
      </div>
      {patients.length > 0 ? (
        <ul>
            <h2>PATIENTS</h2>
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
