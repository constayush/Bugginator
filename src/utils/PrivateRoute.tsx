import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  return user ? children : children;
};

export default PrivateRoute;
