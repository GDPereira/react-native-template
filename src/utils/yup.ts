import * as yup from "yup";

export const stringRequiredSchema = yup
  .string()
  .required("This field is required");

export const emailValidationSchema =
  stringRequiredSchema.email("Use a valid email");

export const passwordValidationSchema =
  stringRequiredSchema.min(6, "At least 6 characters");
