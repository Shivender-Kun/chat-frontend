import React, { useState } from "react";
import { LogIn } from "../SubComponents";
import { useDispatch } from "react-redux";
function Login() {
  const [name, setname] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name === "") return;
    dispatch(LogIn(name));
  };

  return (
    <div className="bg-light " style={styles.loginContainer}>
      <h2 className="text-center">Join Broadcast</h2>
      <form style={styles.form}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="name"
            required
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter name..."
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Join
        </button>
      </form>
    </div>
  );
}

export default Login;

const styles = {
  loginContainer: {
    padding: "40px 20px",
    height: "100%",
  },
  form: {
    // width: "80%",
  },
};
