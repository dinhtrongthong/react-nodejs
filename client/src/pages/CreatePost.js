import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios"
import {useNavigate } from 'react-router-dom'

function CreatePost() {
    let navigate  = useNavigate();

    const initialValue = {
        title: "",
        postText: "",
        username: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Hay nhap tieu de"),
        postText: Yup.string().required("Hay nhap noi dung"),
        username: Yup.string().min(3, "Toi thieu 3 ky tu").max(15,"khong nhap qua 15 ky tu").required("Hay nhap ten nguoi dung")
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts",data).then((reponse) => {
            navigate('/')
        });
    }
  return (
    <div className="createPostPage">
        <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label>Title: </label><br/>
                <ErrorMessage name="title" component="span"/><br/>
                <Field autoComplete="off" id="inputCreatePost" name="title" placeholder="..."/> <br/>
                <label>Post: </label><br/>
                <ErrorMessage name="postText" component="span"/><br/>
                <Field autoComplete="off" id="inputCreatePost" name="postText" placeholder="..."/><br/>
                <label>Username: </label><br/>
                <ErrorMessage name="username" component="span"/><br/>
                <Field autoComplete="off" id="inputCreatePost" name="username" placeholder="..."/><br/>
                <button type="submit">Create post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost