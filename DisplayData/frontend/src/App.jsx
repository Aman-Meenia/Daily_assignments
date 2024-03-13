import { useState } from "react";
import "./App.css";
import { Displaydata } from "./compnents/Displaydata";

function App() {
  const users = [
    {
      Id: 1,
      Name: "John Doe",
      Email: "john@example.com",
      ContactNo: "1234567890",
      Age: 30,
    },
    {
      Id: 2,
      Name: "Jane Smith",
      Email: "jane@example.com",
      ContactNo: "0987654321",
      Age: 25,
    },
    {
      Id: 3,
      Name: "Michael Johnson",
      Email: "michael@example.com",
      ContactNo: "5551234567",
      Age: 45,
    },
    {
      Id: 4,
      Name: "Emily Davis",
      Email: "emily@example.com",
      ContactNo: "9876543210",
      Age: 35,
    },
    {
      Id: 5,
      Name: "Christopher Brown",
      Email: "chris@example.com",
      ContactNo: "1230987654",
      Age: 28,
    },
    {
      Id: 6,
      Name: "Jessica Wilson",
      Email: "jessica@example.com",
      ContactNo: "9998887776",
      Age: 32,
    },
    {
      Id: 7,
      Name: "Daniel Martinez",
      Email: "daniel@example.com",
      ContactNo: "3332221110",
      Age: 40,
    },
    {
      Id: 8,
      Name: "Sophia Anderson",
      Email: "sophia@example.com",
      ContactNo: "4445556667",
      Age: 29,
    },
    {
      Id: 9,
      Name: "William Taylor",
      Email: "william@example.com",
      ContactNo: "5554443332",
      Age: 37,
    },
    {
      Id: 10,
      Name: "Olivia Garcia",
      Email: "olivia@example.com",
      ContactNo: "9876543219",
      Age: 26,
    },
    {
      Id: 11,
      Name: "Ethan Hernandez",
      Email: "ethan@example.com",
      ContactNo: "1112223334",
      Age: 31,
    },
    {
      Id: 12,
      Name: "Isabella Martinez",
      Email: "isabella@example.com",
      ContactNo: "5556667778",
      Age: 33,
    },
    {
      Id: 13,
      Name: "James Gonzalez",
      Email: "james@example.com",
      ContactNo: "9876543212",
      Age: 42,
    },
    {
      Id: 14,
      Name: "Amelia Lopez",
      Email: "amelia@example.com",
      ContactNo: "8889990001",
      Age: 27,
    },
    {
      Id: 15,
      Name: "Alexander Perez",
      Email: "alexander@example.com",
      ContactNo: "1233211234",
      Age: 38,
    },
    {
      Id: 16,
      Name: "Charlotte Lee",
      Email: "charlotte@example.com",
      ContactNo: "9871234567",
      Age: 29,
    },
    {
      Id: 17,
      Name: "Benjamin Moore",
      Email: "benjamin@example.com",
      ContactNo: "6543219870",
      Age: 36,
    },
    {
      Id: 18,
      Name: "Mia Hall",
      Email: "mia@example.com",
      ContactNo: "7778889992",
      Age: 24,
    },
    {
      Id: 19,
      Name: "Jacob Wood",
      Email: "jacob@example.com",
      ContactNo: "6665554441",
      Age: 41,
    },
    {
      Id: 20,
      Name: "Ava Lewis",
      Email: "ava@example.com",
      ContactNo: "1234567891",
      Age: 30,
    },
  ];

  const [id, setId] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = (e) => {
    setUser("");
    console.log("id is " + id);
    e.preventDefault();
    const selectedUser = users.find((user) => user.Id === parseInt(id));
    setUser(selectedUser);
    if (!selectedUser) {
      alert("User not found");
    }
  };

  return (
    <>
      {/* Input   */}

      <label htmlFor="id">Enter Id</label>
      <input
        type="text"
        placeholder="Enter Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      {/* Display Data */}

      <button onClick={handleSubmit}>Submit</button>
      {user && <Displaydata data={user} />}
    </>
  );
}

export default App;
