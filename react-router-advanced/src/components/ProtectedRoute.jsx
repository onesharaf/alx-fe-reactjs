import { Navigate } from "react-router-dom";

function useAuth() {
  const isAuthenticated = localStorage.getItem("isAuth") === "true";
  return isAuthenticated;
}

function ProtectedRoute({ children }) {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
