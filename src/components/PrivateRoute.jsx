import { Navigate } from "react-router-dom";
import { auth } from "./../config/firebase";

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser; // Check if user is authenticated
  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
