import fs from "fs";

// <------------------- Display User ------------------------>
export const getData = (req, res) => {
  try {
    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }

      const value = JSON.parse(data);
      if (!value) {
        return res.send("No user present");
      }
      return res.json({
        value,
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// <--------------------- Add User ---------------------------->
export const addData = (req, res) => {
  try {
    const { id, name, email } = req.body;

    const newUser = {
      id: id,
      name: name,
      email: email,
    };

    console.log(newUser);
    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }
      const value = JSON.parse(data);

      if (checkUserPresent(value, id) == true) {
        console.log("User already present with same ID");
        return res.send("User already present with same ID");
      }
      value.push(newUser);

      fs.writeFile("users.json", JSON.stringify(value), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.send("Error while writing file");
        }
        console.log("Data added successfully!");
      });

      res.send("New user added successfully");
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

//  <----------------------Delete User ------------------------------------------>

export const deleteData = (req, res) => {
  try {
    const { id } = req.params;

    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }

      const value = JSON.parse(data);

      if (checkUserPresent(value, id) == true) {
        const index = getIndex(value, id);

        value.splice(index, 1);

        fs.writeFile("users.json", JSON.stringify(value), "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return res.send("Error while writing file");
          }
          console.log("Data added successfully!");
        });

        return res.send("User delete successfully");
      } else {
        return res.send("User not found");
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// <---------------------Update User ---------------------------->

export const updateData = (req, res) => {
  try {
    let { name, email } = req.body;
    const { id } = req.params;

    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }
      const value = JSON.parse(data);
      if (checkUserPresent(value, id) == true) {
        let index = getIndex(value, id);

        if (!name) {
          name = value[index].name;
        }
        if (!email) {
          email = value[index].email;
        }

        value[index].name = name;
        value[index].email = email;
        fs.writeFile("users.json", JSON.stringify(value), "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return res.send("Error while writing file");
          }
          console.log("Data added successfully!");
        });

        res.send("Details updated successfully");
      } else {
        return res.send("User Not Found");
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// <---------------------Check User With Same ID Present ---------------------------->

const checkUserPresent = (value, id) => {
  let isPreset = false;
  value.map((val) => {
    if (val.id == id) {
      isPreset = true;
    }
  });

  return isPreset;
};

// <----------------------Give Index of id  ----------------------------------------->

const getIndex = (value, id) => {
  let index = -1;
  value.map((val, idx) => {
    if (val.id == id) {
      index = idx;
    }
  });
  return index;
};
