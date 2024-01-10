import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { BUTTONS } from "./styles";
import { scaleWidth } from "@styles/index";
import { SPACING } from "@styles/spacing";
import { COLORS } from "@styles/colors";

type ButtonsPresets = "primary" | "centered" | "rounded" | "outline";

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonsPresets;
}

const buttons: Record<ButtonsPresets, ViewStyle> = {
  primary: {
    padding: scaleWidth(SPACING.xtiny),
    borderWidth: scaleWidth(SPACING.tiny),
    backgroundColor: COLORS.primaryLight,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  rounded: {
    borderRadius: scaleWidth(SPACING.xtiny),
  },
  outline: {
    backgroundColor: COLORS.transparent,
  },
};

const style = StyleSheet.create();

type buttonKeys = keyof typeof BUTTONS;
type variantProps = Partial<Record<buttonKeys, boolean>>;

interface ButtonProps extends variantProps, TouchableOpacityProps {}

export const Button = ({ style, ...props }: ButtonProps) => {
  const styleButton = Object.entries(BUTTONS).reduce((prev, [key, value]) => {
    console.log("key, vlaue :>> ", key, value);
    props["primary"];
    return prev;
    // return (props[key] === true ? [...prev, value] : prev),
  }, []);

  // const styleButton = [style];
  // if (primary) {
  //   styleButton.push(BUTTONS.primary);
  // }
  // if (centered) {
  //   styleButton.push(BUTTONS.centered);
  // }
  // if (outline) {
  //   styleButton.push(BUTTONS.outline);
  // }
  // if (rounded) {
  //   styleButton.push(BUTTONS.rounded);
  // }

  return <TouchableOpacity style={styleButton} {...props} />;
};
