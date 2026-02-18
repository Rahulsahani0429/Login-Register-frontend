// import { useAuth, AuthProvider } from "./context/AuthContext";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./pages/Home";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login"></Navigate>;
// };

// function App() {
//   return (
//     <>
//       <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             // Public Routes
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             // Protected route
//             <Route
//               path="/home"
//               element={
//                 <PrivateRoute>
//                   <Home />
//                 </PrivateRoute>
//               }
//             ></Route>
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </>
//   );
// }

// export default App;

import { useAuth, AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* ✅ Toast Container yaha rakho */}
      <ToastContainer position="top-right" autoClose={2000} />
    </AuthProvider>
  );
}

export default App;
