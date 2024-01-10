import { TextInputProps } from "react-native";
import { InputForm } from "./InputForm";

interface EmailInputProps extends TextInputProps {
  name?: string;
}

export const EmailInput = ({ name = "email", ...props }: EmailInputProps) => {
  return (
    <InputForm
      name={name}
      placeholder="Email"
      keyboardType={"email-address"}
      autoCapitalize="none"
      {...props}
    />
  );
};
