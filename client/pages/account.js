import AppContext from "../context/AppContext";
import { useContext } from "react";

import { useState, useEffect } from "react";

const account = () => {
  const { user, setUser } = useContext(AppContext);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(user);

  return (
    <>
      {user ? (
        <>
          <div>
            <p>Hey {user.username}, je bent ingelogd</p>
            <img src={API_URL + user.avatar.url} />
          </div>
          <div>
            <h2>Jouw honden</h2>
            <p>Naam: {user.hond.naam}</p>
            <p>Ras: {user.hond.ras}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default account;
