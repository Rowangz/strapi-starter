import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { forgotPassword } from "../lib/auth";
import AppContext from "../context/AppContext";

const forgotPwd = () => {
  const [data, updateData] = useState({ identifier: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);

  useEffect(() => {
    console.log(appContext.isAuthenticated);
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  const onChange = (event) => {
    updateData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h2>Wachtwoord vergeten?</h2>
      <form>
        <fieldset disabled={loading}>
          <label>Email:</label>
          <input onChange={(event) => onChange(event)} name="identifier" />

          <button
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              forgotPassword(data.identifier)
                .then((res) => {
                  setLoading(false);
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

export default forgotPwd;
