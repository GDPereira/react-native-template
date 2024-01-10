import { COLORS } from "@styles/colors";
import { scaleWidth } from "@styles/index";
import { SPACING } from "@styles/spacing";
import { StyleSheet, ViewStyle } from "react-native";

const alignMainAxis: ViewStyle = {
  justifyContent: "center",
};
const alignCrossAxis: ViewStyle = {
  alignItems: "center",
};

const alignAllCenter: ViewStyle = { ...alignMainAxis, ...alignCrossAxis };

export const BUTTONS = StyleSheet.create();
