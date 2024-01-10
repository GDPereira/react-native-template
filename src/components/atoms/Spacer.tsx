import { scaleHeight, scaleWidth } from "@styles/index";
import { SPACING } from "@styles/spacing";
import { View } from "react-native";

interface SpacerProps {
  size?: keyof typeof SPACING;
}

export const Spacer = ({ size = "medium" }: SpacerProps) => {
  const height = scaleHeight(SPACING[size]);
  const width = scaleWidth(SPACING[size]);

  return <View style={{ height, width }} />;
};
