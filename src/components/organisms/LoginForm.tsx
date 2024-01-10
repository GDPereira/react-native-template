import { ButtonText } from "@components/molecules/ButtonText";
import { EmailInput } from "@components/molecules/EmailInput";
import { PasswordInput } from "@components/molecules/PasswordInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidationSchema, passwordValidationSchema } from "@utils/yup";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { View } from "react-native";
import * as yup from "yup";

enum FORM_FIELDS {
  email = "email",
  password = "password",
}

const schema = yup
  .object({
    [FORM_FIELDS.email]: emailValidationSchema,
    [FORM_FIELDS.password]: passwordValidationSchema,
  })
  .required();

export type LoginFormData = yup.InferType<typeof schema>;

interface LoginFormProps {
  onSubmitSuccess: SubmitHandler<LoginFormData>;
  onSubmitError?: SubmitErrorHandler<LoginFormData>;
  defaultValues?: LoginFormData;
}

export const LoginForm = ({
  onSubmitSuccess,
  onSubmitError,
  defaultValues = { email: "", password: "" },
}: LoginFormProps) => {
  const formMethods = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const {
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = formMethods;

  const submitSuccess: SubmitHandler<LoginFormData> = async ({
    email,
    password,
  }) => {
    await onSubmitSuccess({ email, password });
    reset();
  };

  const submitError: SubmitErrorHandler<LoginFormData> = ({
    email,
    password,
  }) => {
    onSubmitError?.({ email, password });

    if (email) return setFocus(FORM_FIELDS.email);
    if (password) return setFocus(FORM_FIELDS.password);
  };

  const onSubmit = handleSubmit(submitSuccess, submitError);

  const onSubmitEditingEmail = () => setFocus(FORM_FIELDS.password);

  return (
    <FormProvider {...formMethods}>
      <EmailInput onSubmitEditing={onSubmitEditingEmail} returnKeyType="next" />
      <View style={{ height: 20 }} />
      <PasswordInput
        onSubmitEditing={onSubmit}
        returnKeyType="send"
        blurOnSubmit={!errors.password}
      />
      <View style={{ height: 20 }} />
      <ButtonText onPress={onSubmit} text="Submit" />
    </FormProvider>
  );
};
