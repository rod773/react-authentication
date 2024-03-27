import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN, LOGOUT, PRIVATE } from "./config/routes/path";
import Home from "views/Home";
import Login from "views/Login";
import Private from "views/Private";
import Logout from "views/Logout";
import { AuthContextProvider } from "./context/authContext";
import PublicRoute from "components/router/PublicRoute";
import PrivateRoute from "components/router/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Private />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
