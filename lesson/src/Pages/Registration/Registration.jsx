import st from "./Registration.module.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
export const Registration = ({createNewUser}) => {
  const validateRegister = yup.object().shape({
    login: yup.string().required("The field can't be empty"),
    name: yup
      .string()
      .required("The field can't be empty")
      .matches(/[A-Z]{1}[a-z]/),
    password: yup
      .string()
      .required("The field can't be empty")
      .min(8, "The length must be at 8")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&?])[A-Za-z\d!#$%&?]{8,}$/,

        "Must include at least one uppercase, number and symbol"
      ),
  });
  const createUser = (values) => {
    const newUser = {
      id: Date.now(),
      ...values
    };
    createNewUser(newUser)
  };
  return (
    <div className={st.registration}>
      <Formik
        initialValues={{
          login: "",
          name: "",
          password: "",
          role: "",
        }}
        onSubmit={(values) => createUser(values)}
        validationSchema={validateRegister}
      >
        <Form>
          <Field name="login" placeholder="Login" />
          <ErrorMessage name="login" component="span" />
          <Field name="name" placeholder="Login" />
          <ErrorMessage name="name" component="span" />
          <Field name="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" />
          
          <label>
            <Field type="radio" name="role" value="admin" />
            Admin
          </label>
          <label>
            <Field type="radio" name="role" value="user" />
            User
          </label>
          <ErrorMessage name="role" component="span" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
