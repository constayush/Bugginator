import { Navigate } from "react-router";
import { useAuthStore } from '../store/useAuthStore';
import { useLocation } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (!user) {
    // redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
export default ProtectedRoute