import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_STUDENTS } from "../../config";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(GET_STUDENTS)
      .then((resp) => setStudents(resp.data))
      .catch((err) => console.log(err));
  }, [students]);
  return (
    <table className="table table-bordered table-secondary">
      <thead>
        <tr>
          <th scope="col">StudentID</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Year Of Study</th>
          <th scope="col">UserID</th>
        </tr>
      </thead>
      <tbody>
        {students
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.yearOfStudy}</td>
              <td>{student.user.id}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default StudentList;
