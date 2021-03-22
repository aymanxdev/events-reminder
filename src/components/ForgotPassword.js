import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword } = useContext(AppContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your inbox for further instructions ");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {error && <Alert severity="danger">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input id="email" type="email" ref={emailRef} />

        <button disabled={loading} otype="submit">
          Reset Password
        </button>
      </form>
      <h4>
        Need an account? <Link to="/signup">Signup</Link>
      </h4>
      <h4>
        <Link to="/login">Login </Link>
      </h4>
    </div>
  );
};

export default ForgotPassword;
