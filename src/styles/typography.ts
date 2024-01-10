import { StyleSheet, TextStyle } from "react-native";
import { FONT_SIZE } from "./fontSize";

const fontBold: TextStyle = { fontWeight: "bold" };

const title: TextStyle = { fontSize: FONT_SIZE.huge, ...fontBold };
const titleCenter: TextStyle = { ...title, textAlign: "center" };
const primaryText: TextStyle = { fontSize: FONT_SIZE.default };
const primaryTextBold: TextStyle = { ...primaryText, ...fontBold };

export const TYPOGRAPHY = StyleSheet.create({
  title,
  titleCenter,
  primaryText,
  primaryTextBold,
});
