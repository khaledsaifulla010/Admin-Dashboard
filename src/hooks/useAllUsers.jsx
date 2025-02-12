import axios from "axios";
import { useEffect, useState } from "react";

const useAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return [users];
};

export default useAllUsers;
