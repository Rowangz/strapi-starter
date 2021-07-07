import AppContext from "../../context/AppContext";
import { useState, useEffect } from "react";
import api from "../../lib/twitchApi";
import { useRouter } from "next/router";

const users = () => {
  const router = useRouter();
  const { slug } = router.query;

  const fetchData = async () => {
    await api
      .get(`https://api.twitch.tv/helix/users?login=${slug}`)
      .then((response) => {
        console.log(response.data.data);
      });
  };

  useEffect(() => {
    fetchData();
    return () => {};
  });
  return <div></div>;
};

export default users;
