import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios"

function Registration() {
  const initialValue = {
    username: "",
    password: ""
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "Toi thieu 3 ky tu").max(15, "khong nhap qua 15 ky tu").required("Hay nhap ten nguoi dung"),
    password: Yup.string().min(3, "Toi thieu 3 ky tu").max(15, "khong nhap qua 15 ky tu").required("Hay nhap ten nguoi dung")
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then((response) => {
      console.log(response);
    });
  }
  return (
    <div className="registrationPage">
      <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>Username: </label>
          <ErrorMessage name="username" component="span" /><br />
          <Field autoComplete="off" id="usernameInput" name="username" placeholder="..." /><br />
          <label>Password: </label><br />
          <ErrorMessage name="username" component="span" /><br />
          <Field type="password" autoComplete="off" id="passwordInput" name="password" placeholder="..." /><br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Registration