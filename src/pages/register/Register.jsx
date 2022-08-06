import React, { useState } from "react";
import "./register.css";
import { useAddUserMutation } from "../../services/userApi";
import { useNavigate } from "react-router-dom";
import { useUsersQuery } from "../../services/userApi";
function Register() {
  const [addUser] = useAddUserMutation();
  const { data } = useUsersQuery();
  // //////////////
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!name) alert("fill name input ");
    else if (!email) alert("fill email input");
    else if (!password) alert("fill password input");
    else if (password.length < 6) alert("pasword not strong");
    else {
      const check = data.some((item) => item.email === email);
      if (check) alert("this kid of user alredy have");
      else {
        const user = {
          name,
          email,
          password,
        };
        navigate("/login");
        await addUser(user);
      }
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email "
        />
        <input
          type="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Register;
