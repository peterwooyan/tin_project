import React, { useState } from "react";
import { BASE_URL } from "../../config";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function StudentDeleteForm() {
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState("");
  const validationSchema = () => {
    return Yup.object().shape({
      studentId: Yup.number().required("StudentID is required"),
    });
  };
  const handleSubmit = (data, { resetForm }) => {
    let studentId = data.studentId;
    axios
      .delete(BASE_URL + "delete/student/" + studentId)
      .then((resp) => {
        resetForm({ data: "" });
        setSuccess(true);
      })
      .catch((err) =>
        setErr("Wrong StudentID or Still Referenced from other tables")
      );
  };
  const initialValues = {
    studentId: "",
  };
  return (
    <>
      {success ? (
        <h5 className="text-primary">Student removed Successfully!</h5>
      ) : null}
      {err.length > 0 && <h5 className="text-danger">{err}</h5>}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, resetForm }) => (
          <Form>
            <div className="form-group">
              <label>Student Id to Delete</label>
              <Field
                name="studentId"
                type="number"
                className={
                  "form-control" +
                  (errors.studentId && touched.studentId ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="studentId"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group mt-2">
              <button type="submit" className="btn btn-danger btn-sm">
                DELETE RECORD
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-warning btn-sm"
              >
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default StudentDeleteForm;
