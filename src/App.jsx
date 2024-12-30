import axios from "axios";
import { useState, useEffect } from "react";
import Mypage from "./Components/Mypage";

const App = () => {
  const [users, setUsers] = useState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users?.map((el) => (
        <p key={el.id}> {el.name} </p>
      ))}

      <Mypage />
    </div>
  );
};

export default App;
