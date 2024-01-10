import { TYPOGRAPHY } from "@styles/typography";
import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  text: string;
  type?: keyof typeof TYPOGRAPHY;
}

export const CustomText = ({
  type = "primaryText",
  text,
  style,
  ...props
}: CustomTextProps) => {
  const styleText = [TYPOGRAPHY[type], style];

  return (
    <Text style={styleText} {...props}>
      {text}
    </Text>
  );
};
