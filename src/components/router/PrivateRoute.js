import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "config/routes/path";
import { useAuthContext } from "context/authContext";

function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) return <Navigate to={LOGIN} />;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoute;
