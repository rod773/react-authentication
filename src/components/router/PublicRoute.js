import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "config/routes/path";
import { useAuthContext } from "context/authContext";

function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) return <Navigate to={PRIVATE} />;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PublicRoute;
