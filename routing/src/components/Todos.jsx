import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fun = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
        })
        .catch(() => {
          alert("Error while fetching user");
        });
      console.log(user);
    };
    fun();
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {user &&
        user.map((user, index) => {
          return (
            <div key={index}>
              <p>{JSON.stringify(user)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
