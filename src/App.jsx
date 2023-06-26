import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
