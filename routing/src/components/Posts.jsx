import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fun = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
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
      <h2>POSTS</h2>
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

export default Posts;
