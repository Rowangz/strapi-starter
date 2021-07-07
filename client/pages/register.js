import { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { registerUser } from "../lib/auth";

const register = () => {
  const [data, updateData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChange = (event) => {
    updateData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <div>
        <h2>Registreren</h2>
        <form>
          <input
            onChange={(event) => onChange(event)}
            name="username"
            placeholder="Gebruikersnaam"
          ></input>
          <input
            onChange={(event) => onChange(event)}
            name="email"
            placeholder="E-mailadres"
          ></input>
          <input
            onChange={(event) => onChange(event)}
            name="password"
            type="password"
            placeholder="wachtwoord"
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              registerUser(data.username, data.email, data.password)
                .then((res) => {
                  // set authed User in global context to update header/app state
                  appContext.setUser(res.data.user);
                })
                .catch((error) => {
                  console.log(error.response.data);
                });
            }}
          >
            Registreren
          </button>
        </form>
      </div>
    </div>
  );
};

export default register;
