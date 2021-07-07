import "../styles/globals.css";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import Layout from "../components/Layout";

import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // grab token value from cookie
    const token = Cookie.get("token");
    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          setUser({ user: null });
          return null;
        }
        const user = await res.json();
        setUser(user);
      });
    }
    return () => {};
  }, []);
  return (
    <AppContext.Provider
      value={{
        user: user,
        isAuthenticated: !!user,
        setUser: setUser,
        token: "6gk5m2okarxzlfblm62t9vbnjmn72c",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
