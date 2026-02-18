import axios from "axios";

const API = axios.create({
  baseURL: "https://login-register-backend.vercel.app/api/",
});

// Automatically attac token

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export default API;

// thist is method two

// import axios from "axios";

// const user = JSON.parse(localStorage.getItem("user"));

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     Authorization: user?.token ? `Bearer ${user.token}` : ""
//   }
// });

// export default API;

// this is method free

// import axios from "axios";

// const API_URL = "http://localhost:5000/api";

// export const getProfile = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return axios.get(`${API_URL}/profile`, {
//     headers: {
//       Authorization: `Bearer ${user?.token}`,
//     },
//   });
// };
