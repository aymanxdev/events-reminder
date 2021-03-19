import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(AppContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Log In</h2>
      {error && <Alert severity="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input id="email" type="email" ref={emailRef} />
        <label>password</label>
        <input id="password" type="password" ref={passwordRef} />

        <button disabled={loading} otype="submit">
          Login
        </button>
      </form>
      <h4>
        Need an account? <Link to="/signup">Signup</Link>
      </h4>
    </div>
  );
};

export default Login;
