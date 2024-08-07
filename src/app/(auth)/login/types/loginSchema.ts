import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email.").required(),
    password: yup.string().required(),
  })
  .required();
