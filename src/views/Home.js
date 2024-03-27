import { Link } from "react-router-dom";
import { LOGIN } from "config/routes/path";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={LOGIN}>Iniciar Sesion</Link>
    </div>
  );
}

export default Home;
