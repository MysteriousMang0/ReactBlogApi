import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../src/index.css'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  document.title = "About"
  let link = document.querySelector("link[rel*='icon']");
  link.href = "https://www.sanctamaria.nl/runtime/images/49/32x32/sancta_rood_equilibrist.jpg"

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("https://worker-hello.torvic2021.workers.dev/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("logged in");
          localStorage.setItem("user", JSON.stringify({ loggedIn: true}))
          setUsername("");
          setPassword("");
          navigate("/dashboard"); // Use React Router navigation
        } else {
          console.log("not logged in");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <textarea
        name="username"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></textarea>
      <textarea
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></textarea>
      <button id="button" type="submit">Login</button>
    </form>
  );
}

export default Login;
