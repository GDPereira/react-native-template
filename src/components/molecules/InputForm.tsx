import { ErrorText } from "@components/atoms/ErrorText";
import { Input } from "@components/atoms/Input";
import { Controller, useFormContext } from "react-hook-form";
import { TextInputProps, View } from "react-native";

interface InputFormProps extends TextInputProps {
  name: string;
}

export const InputForm = ({ name, ...props }: InputFormProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <>
          <Input value={value} onChangeText={onChange} ref={ref} {...props} />
          <View style={{ height: 5 }} />
          <ErrorText error={error?.message} />
        </>
      )}
    />
  );
};
