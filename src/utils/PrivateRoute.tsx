import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
