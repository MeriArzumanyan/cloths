import st from "./Order.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const regions = [
  "Select region",
  "Aragatsotn",
  "Ararat",
  "Armavir",
  "Gegharkunik",
  "Kotayk",
  "Lori",
  "Shirak",
  "Syunik",
  "Tavush",
  "Vayots Dzor",
  "Yerevan",
];
export const Order = ({ modalOpen, orderFormApp }) => {
  const orderForm = (values) => {
    orderFormApp(values)
    modalOpen()
  };
  const validateOrder = yup.object().shape({
    name: yup
      .string()
      .required("The field can't be empty")
      .matches(/[A-Z]{1}[a-z]/, "The first letter must be uppercase"),
    lastname: yup
      .string()
      .required("The field can't be empty")
      .matches(/[A-Z]{1}[a-z]/, "The first letter must be uppercase"),
    phone: yup
      .string()
      .required("The field can't be empty")
      .matches(/^\+374\d*$/, "Phone number isn't valid"),
    email: yup
      .string()
      .required("The field can't be empty")
      .email("This email address isn't valid"),
    region: yup.string().required("Choose a region"),
    city: yup
      .string()
      .required("The field can't be empty")
      .matches(/[A-Z]{1}[a-z]/, "The first letter must be uppercase"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        phone: "",
        email: "",
        region: "",
        city: "",
      }}
      onSubmit={(values) => orderForm(values)}
      validationSchema={validateOrder}
    >
      {() => (
        <Form>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component={"span"} />
          <Field name="lastname" placeholder="Lastname" />
          <ErrorMessage name="lastname" component={"span"} />
          <Field name="phone" placeholder="Phone" />
          <ErrorMessage name="phone" component={"span"} />
          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component={"span"} />
          <Field name="region" as="select">
            {regions.map((el, index) => {
              return (
                <option
                  key={index}
                  value={index === 0 ? "" : el}
                  hidden={index === 0}
                >
                  {el}
                </option>
              );
            })}
          </Field>
          <ErrorMessage name="region" component={"span"} />

          <Field name="city" placeholder="City" />
          <ErrorMessage name="city" component={"span"} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
