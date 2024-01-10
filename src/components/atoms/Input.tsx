import { COLORS } from "@styles/colors";
import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";

export const Input = forwardRef<TextInput, TextInputProps>(
  ({ style, ...props }, ref) => (
    <TextInput
      ref={ref}
      placeholderTextColor={COLORS.lightGray}
      style={[{ borderRadius: 10, borderWidth: 1, padding: 10 }, style]}
      {...props}
    />
  )
);
