import st from "./Registration.module.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
export const Registration = ({ createNewUser }) => {
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
    role: yup.string().required(),
    gender: yup.string().required(),
  });
  const navigate = useNavigate();
  const createUser = (values) => {
    const newUser = {
      id: Date.now(),
      ...values,
    };
    createNewUser(newUser);
    navigate("/profile",{state:newUser});
  };
  return (
    <div className={st.registration}>
      <div className={st.forFormik}>
      <h2>Create an account</h2>

        <Formik
          initialValues={{
            login: "",
            name: "",
            password: "",
            role: "",
            gender: "",
          }}
          onSubmit={(values) => createUser(values)}
          validationSchema={validateRegister}
        >
          
          <Form>
            <Field name="login" placeholder="Login" />
            <ErrorMessage name="login" component="span" />
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="span" />
            <Field name="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" />
            <div className={st.first}>
              <label>
                <Field
                  type="radio"
                  name="role"
                  value="admin"
                  className={st.checkbox}
                />
                Admin
              </label>
              <label>
                <Field
                  type="radio"
                  name="role"
                  value="user"
                  className={st.checkbox}
                />
                User
              </label>
              <ErrorMessage name="role" component="span" />
            </div>
            <div className={st.second}>
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                  className={st.checkbox}
                />
                Male
              </label>
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                  className={st.checkbox}
                />
                Female
              </label>
              <ErrorMessage name="gender" component="span" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
