import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { login } from "../lib/auth";
import AppContext from "../context/AppContext";

const Login = (props) => {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  const onChange = (event) => {
    updateData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form>
        <fieldset disabled={loading}>
          <label>Email:</label>
          <input onChange={(event) => onChange(event)} name="identifier" />
          <label>Password:</label>
          <input
            onChange={(event) => onChange(event)}
            type="password"
            name="password"
          />

          <span>
            <a href="">
              <small>Forgot Password?</small>
            </a>
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              login(data.identifier, data.password)
                .then((res) => {
                  setLoading(false);
                  // set authed User in global context to update header/app state
                  appContext.setUser(res.data.user);
                })
                .catch((error) => {
                  console.log(error.response.data);
                  setLoading(false);
                });
            }}
          >
            {loading ? "Loading... " : "Submit"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
