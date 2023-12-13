import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export const Button = (props: TouchableOpacityProps) => {
  return <TouchableOpacity style={styles.button} {...props} />;
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
