import st from "./LogIn.module.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const LogIn = ({ users }) => {
  const validateLogIn = yup.object().shape({
    login: yup.string().required("The field can't be empty"),

    password: yup
      .string()
      .required("The field can't be empty")
      .min(8, "The length must be at 8")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&?])[A-Za-z\d!#$%&?]{8,}$/,

        "Must include at least one uppercase, number and symbol"
      ),
  });
  
  const navigate = useNavigate();

  const authorization = (values) => {
    let userFound = users.find(
      (el) => el.login === values.login && el.password === values.password
    );
    if (userFound) {
      navigate("/profile", { state: userFound });
    }else{
        navigate("/registration")
    }
  };
  return (
    <div className={st.log}>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        onSubmit={(values) => authorization(values)}
        validationSchema={validateLogIn}
      >
        <Form>
          <Field name="login" placeholder="Login" />
          <ErrorMessage name="login" component="span" />
          <Field name="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
