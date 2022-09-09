import React, { useState } from "react";
import { AddStudent } from "./AddStudent";
import { AppContext } from "./context";
import { StudentList } from "./StudentList";

export const Data = () => {
  const [student, setstudent] = useState([
    {
      name: "raj",
      age: "20",
    },
  ]);

  //payload student
  const dispacthStudentEvent = (type, paylod) => {
    switch (type) {
      case "ADD_STUDENT":
        setstudent([...student, paylod]);
        return;
      case "DELETE_STUDENT":
        setstudent(student.filter((std) => std.name !== paylod.name));
        return;
      default:
        return;
    }
  };
  return (
    <div>
      <AppContext.Provider
        value={{ student, dispacthStudentEvent }}>
            <AddStudent/>
            <StudentList/>
        </AppContext.Provider>
    </div>
  );
};
