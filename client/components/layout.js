import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";

const Layout = (props) => {
  const { user, setUser } = useContext(AppContext);

  return (
    <div className="wrapper">
      <Head>
        <title>Twitch social</title>
      </Head>
      <header className="">
        <nav className="">
          <ul className="">
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="">
              {user ? (
                <Link href="/account">
                  <a>{user.username}</a>
                </Link>
              ) : (
                <Link href="/register">
                  <a> Sign up</a>
                </Link>
              )}
            </li>
            <li className="">
              {user ? (
                <Link href="/">
                  <a
                    onClick={() => {
                      logout();
                      setUser(null);
                    }}
                  >
                    Logout
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a>Sign in</a>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <div className="">{props.children}</div>
    </div>
  );
};

export default Layout;
