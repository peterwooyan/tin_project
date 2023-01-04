import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_TEACHERS } from "../../config";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get(GET_TEACHERS)
      .then((resp) => setTeachers(resp.data))
      .catch((err) => console.log(err));
  }, [teachers]);

  return (
    <table className="table table-bordered table-info">
      <thead>
        <tr>
          <th scope="col">TeacherID</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Degree</th>
          <th scope="col">UserID</th>
        </tr>
      </thead>
      <tbody>
        {teachers
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((teacher) => (
            <tr key={teacher.id}>
              <th scope="row">{teacher.id}</th>
              <td>{teacher.name}</td>
              <td>{teacher.surname}</td>
              <td>{teacher.degree}</td>
              <td>{teacher.user.id}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TeacherList;
