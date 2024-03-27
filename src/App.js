import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, LOGIN, LOGOUT, PRIVATE } from "./config/routes/path";
import Home from "./views/Home";
import Login from "./views/Login";
import Private from "./views/Private";
import Logout from "./views/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={PRIVATE} element={<Private />} />
        <Route path={LOGOUT} element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
