import React, { useState } from "react";
import "./login.css";
import { useUsersQuery } from "../../services/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  const { data } = useUsersQuery();
  const loginBtn = (e) => {
    e.preventDefault();
    const user = data.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === pasword
    );

    if (user) {
      // dispatch(loggedIn());
      alert("welcom web site");
      dispatch(getUser(user));
      navigate("/");
      localStorage.setItem("user",JSON.stringify(user))
    } else alert("pasword or email incorrect");
  };
  return (
    <div className="register">
      <form onSubmit={loginBtn}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => setPasword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Login</button>
        <p>
          Go to:
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
