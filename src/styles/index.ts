import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("screen");

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scaleWidth = (size: number) =>
  PixelRatio.roundToNearestPixel(size * (width / guidelineBaseWidth));

export const scaleHeight = (size: number) =>
  PixelRatio.roundToNearestPixel((size * height) / guidelineBaseHeight);
