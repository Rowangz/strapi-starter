import axios from "axios";
import { useEffect } from "react";

const Dog = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  useEffect(() => {
    getDogs();
    return () => {};
  }, []);

  const getDogs = async () => {
    try {
      const response = await axios.get("http://localhost:1337/honds/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <div></div>;
};

export default Dog;
