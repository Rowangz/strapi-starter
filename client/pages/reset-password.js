import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { resetPassword } from "../lib/auth";
import AppContext from "../context/AppContext";

const resetPwd = () => {
  const [data, updateData] = useState({
    password: "",
    passwordConfirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);
  const code = router.query.code;

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
      <h2>Wachtwoord opnieuw instellen</h2>
      <form>
        <fieldset disabled={loading}>
          <input
            onChange={(event) => onChange(event)}
            name="password"
            type="password"
          />
          <input
            onChange={(event) => onChange(event)}
            name="passwordConfirmation"
            type="password"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              resetPassword(code, data.password, data.passwordConfirmation)
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

export default resetPwd;
