import { COLORS } from "@styles/colors";
import { FONT_SIZE } from "@styles/fontSize";
import { StyleSheet, Text } from "react-native";

interface ErrorTextProps {
  error?: string;
}

export const ErrorText = ({ error }: ErrorTextProps) => {
  return error && <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: COLORS.error,
    fontSize: FONT_SIZE.small,
  },
});
