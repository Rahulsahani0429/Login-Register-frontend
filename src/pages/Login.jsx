// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = await API.post("/auth/login", {
//       email,
//       password,
//     });
//     login(data);
//     navigate("/home");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="enter your email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <br />
//       <br />
//       <input
//         type="password"
//         placeholder="enter your password"
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <br />
//       <br />
//       <button>Login</button>
//     </form>
//   );
// }

// this is second method

// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       login(data);

//       // ✅ Success alert
//       alert("Login Successful ✅");

//       navigate("/"); // ya "/home" agar route defined hai
//     } catch (error) {
//       // ❌ Error alert
//       alert(error.response?.data?.message || "Login Failed ❌");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <br />
//       <br />

//       <input
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       <br />
//       <br />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// this is third medhod

// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState(""); // ✅ new state
//   const [error, setError] = useState(""); // optional error state

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       login(data);

//       setMessage("Login successful ✅");
//       setError("");

//       // 1.5 second baad redirect
//       setTimeout(() => {
//         navigate("/home");
//       }, 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed ❌");
//       setMessage("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         type="password"
//         placeholder="enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <br />
//       <br />

//       <button>Login</button>

//       <br />
//       <br />

//       {/* Success message */}
//       {message && <p style={{ color: "green" }}>{message}</p>}

//       {/* Error message */}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// }

// this is forth method

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      login(data);

      // ✅ Success toast
      toast.success("Login Successful ✅");

      navigate("/home");
    } catch (error) {
      // ❌ Error toast
      toast.error(error.response?.data?.message || "Login Failed ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Login</button>
    </form>
  );
}
