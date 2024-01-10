import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps, TouchableOpacity, View } from "react-native";
import { InputForm } from "./InputForm";

interface PasswordInputProps extends TextInputProps {
  name?: string;
}

export const PasswordInput = ({
  name = "password",
  ...props
}: PasswordInputProps) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  const handleClickEye = () => setIsHiddenPassword(!isHiddenPassword);

  return (
    <View>
      <InputForm
        name={name}
        placeholder="Password"
        secureTextEntry={isHiddenPassword}
        autoCapitalize="none"
        {...props}
      />
      <TouchableOpacity
        onPress={handleClickEye}
        style={{
          justifyContent: "center",
          padding: 10,
          position: "absolute",
          right: 0,
        }}
      >
        {!isHiddenPassword && <Feather name="eye" size={18} color="black" />}
        {isHiddenPassword && <Feather name="eye-off" size={18} color="black" />}
      </TouchableOpacity>
    </View>
  );
};
