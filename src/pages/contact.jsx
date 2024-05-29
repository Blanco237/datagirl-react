import React, { useState } from "react";
import Input from "../components/input/Input";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  function handleUpdate(field, value) {
    setContact({ ...contact, [field]: value });
  }

  function addContact() {
    if (!contact.email || !contact.fname || !contact.lname) {
      alert("Please fill all fields");
      return;
    }

    setContacts([...contacts, contact]);
    setContact({
      fname: "",
      lname: "",
      email: "",
    });
  }

  return (
    <div>
      <table border={2}>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>{contact.fname}</td>
                <td>{contact.lname}</td>
                <td>{contact.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>

      <form style={{display: 'flex', gap: '10px'}}>
        <Input
          type={"text"}
          label={"First Name"}
          value={contact.fname}
          setValue={(val) => handleUpdate("fname", val)}
          variant={"small"}
        />
        <Input
          type={"text"}
          label={"Last Name"}
          value={contact.lname}
          setValue={(val) => handleUpdate("lname", val)}
          variant={"medium"}
        />
        <Input
          type={"email"}
          label={"Email"}
          value={contact.email}
          setValue={(val) => handleUpdate("email", val)}
          variant={"large"}
        />
      </form>
      <button onClick={addContact}>Add</button>
    </div>
  );
}

export default Contact;
