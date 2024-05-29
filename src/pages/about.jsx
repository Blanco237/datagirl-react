import React, { useState } from "react";
import Input from "../components/input/Input";

function About() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  return (
    <div>
      <Input
        type={"text"}
        label={"First Name"}
        value={formData.fname}
        setValue={(val) => setFormData({ ...formData, fname: val })}
      />
      <Input
        type={"text"}
        label={"Last Name"}
        value={formData.lname}
        setValue={(val) => setFormData({ ...formData, lname: val })}
      />
      <Input
        type={"email"}
        label={"Email"}
        value={formData.email}
        setValue={(val) => setFormData({ ...formData, email: val })}
      />
      <Input
        type={"tel"}
        label={"Phone Number"}
        value={formData.phone}
        setValue={(val) => setFormData({ ...formData, phone: val })}
      />
    </div>
  );
}

export default About;
