import { ButtonText } from "@components/molecules/ButtonText";
import { EmailInput } from "@components/molecules/EmailInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidationSchema } from "@utils/yup";
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
}

const schema = yup
  .object({
    [FORM_FIELDS.email]: emailValidationSchema,
  })
  .required();

export type ForgotPasswordFormData = yup.InferType<typeof schema>;

interface LoginFormProps {
  onSubmitSuccess: SubmitHandler<ForgotPasswordFormData>;
  onSubmitError?: SubmitErrorHandler<ForgotPasswordFormData>;
  defaultValues?: ForgotPasswordFormData;
}

export const ForgotPasswordForm = ({
  onSubmitSuccess,
  onSubmitError,
  defaultValues = { email: "" },
}: LoginFormProps) => {
  const formMethods = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  const submitSuccess: SubmitHandler<ForgotPasswordFormData> = async ({
    email,
  }) => {
    await onSubmitSuccess({ email });
    reset();
  };

  const submitError: SubmitErrorHandler<ForgotPasswordFormData> = ({
    email,
  }) => {
    onSubmitError?.({ email });
  };

  const onSubmit = handleSubmit(submitSuccess, submitError);

  return (
    <FormProvider {...formMethods}>
      <EmailInput
        onSubmitEditing={onSubmit}
        returnKeyType="next"
        blurOnSubmit={!errors.email}
      />
      <View style={{ height: 20 }} />
      <ButtonText onPress={onSubmit} text="Submit" />
    </FormProvider>
  );
};
