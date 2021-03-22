import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();

  const { signup } = useContext(AppContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords dont match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Sign up</h2>
      {error && <Alert severity="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="name" type="text" ref={nameRef} />
        <label>Email</label>
        <input id="email" type="email" ref={emailRef} />
        <label>password</label>
        <input id="password" type="password" ref={passwordRef} />
        <label>Password confirm</label>
        <input id="password-confirm" type="password" ref={passwordConfirmRef} />
        <button disabled={loading} otype="submit">
          Sign up
        </button>
      </form>
      <h4>
        Already have an account? <Link to="/login">Login</Link>
      </h4>
    </div>
  );
};

export default Signup;
