import { useAuthContext } from "context/authContext";
import { useState } from "react";
import { MAGIC_WORD } from "config/const/magicWord";

function Login() {
  const login = useAuthContext();

  const [magicWord, setMagicWord] = useState("");

  function handleInputChange(e) {
    setMagicWord(e.targetValue);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (magicWord === MAGIC_WORD) {
      login();
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
}

export default Login;
