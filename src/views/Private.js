import { Link } from "react-router-dom";
import { LOGOUT } from "config/routes/path";

function Private() {
  return (
    <div>
      <h1>Private</h1>
      <Link to={LOGOUT}>Cerrar Sesion</Link>
    </div>
  );
}

export default Private;
