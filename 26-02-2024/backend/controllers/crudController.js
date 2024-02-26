import fs from "fs";
import { title } from "process";
// <-------------- UPDATE completed status -------------------->

export const updateCompletedStatus = (req, res) => {
  try {
    const { completed } = req.body;

    if (completed == undefined) {
      return res.status(400).json({
        message: "Completed field is required ",
      });
    }
    console.log(completed);
    if (completed !== true && completed !== false) {
      return res.status(400).json({
        message: "Completed can either be true or false  ",
      });
    }

    let { id } = req.params;
    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }

      const value = JSON.parse(data);

      if (checkUserPresent(value, id) == true) {
        const index = getIndex(value, id);

        value[index].completed = completed;
        fs.writeFile("users.json", JSON.stringify(value), "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return res.send("Error while writing file");
          }
          console.log("Data added successfully!");
        });
        return res.status(200).json({
          message: "Completed status updated successfully",
        });
      } else {
        return res.send("No Task model with this id present");
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// <------------------ GET TASK BY ID ---------------------->
export const getDataWithId = (req, res) => {
  try {
    let { id } = req.params;
    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }

      const value = JSON.parse(data);

      if (checkUserPresent(value, id) == true) {
        const index = getIndex(value, id);
        const task = value[index];
        return res.status(200).json({
          task,
        });
      } else {
        return res.send("No Task model with this id present");
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// <------------------- GET ALL TASKS------------------------>
export const getData = (req, res) => {
  try {
    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }

      const value = JSON.parse(data);
      if (!value) {
        return res.send("No Task Model present");
      }
      return res.status(200).json({
        value,
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// <--------------------- Add TASKS ---------------------------->
export const addData = (req, res) => {
  try {
    const { id, title, description, completed } = req.body;
    console.log(
      "id is " +
        id +
        " title is  " +
        title +
        "  description " +
        description +
        "completed " +
        completed,
    );

    if (!id || !title || !description || completed == undefined) {
      return res.status(401).json({
        message: "All fields are required",
      });
    }

    const newUser = {
      id: id,
      title: title,
      description: description,
      completed: completed,
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

      res.send("New taks added successfully");
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

//  <----------------------Delete TASKS ------------------------------------------>

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

        return res.send("Task delete successfully");
      } else {
        return res.send("Taks not found");
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

// <---------------------Update TASKS ---------------------------->

export const updateData = (req, res) => {
  try {
    let { title, description, completed } = req.body;
    const { id } = req.params;

    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.send("Error while readign file");
      }
      const value = JSON.parse(data);
      if (checkUserPresent(value, id) == true) {
        let index = getIndex(value, id);

        if (!title) {
          title = value[index].title;
        }
        if (!description) {
          description = value[index].description;
        }
        if (!completed) {
          completed = value[index].completed;
        }

        value[index].title = title;
        value[index].description = description;
        value[index].completed = completed;
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
