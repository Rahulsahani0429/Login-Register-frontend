import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import useAuth from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/register", {
      name,
      email,
      password,
    });

    login(data);

    navigate("/login");
  };

  //   second method
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //   const response = await API.post("/auth/register", {
  //   name,
  //   email,
  //   password
  // });

  // const data = response.data;

  // login(data);
  // navigate("/");
  //   };

  // third method

  //   const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await API.post("/auth/register", {
  //       name,
  //       email,
  //       password
  //     });

  //     localStorage.setItem("user", JSON.stringify(data));
  //     login(data);  // update React context state
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.response?.data?.message);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="enter your name"
      />
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="enter your email"
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="enter your pasword"
      />
      <br />
      <br />
      <button>register</button>
    </form>
  );
}
