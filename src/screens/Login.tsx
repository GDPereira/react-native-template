import { CustomText } from "@components/atoms/CustomText";
import { Spacer } from "@components/atoms/Spacer";
import { ButtonText } from "@components/molecules/ButtonText";
import { LoginForm, LoginFormData } from "@components/organisms/LoginForm";
import { scaleHeight } from "@styles/index";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    router.replace("(tabs)");
    setIsLoading(false);
  };

  const handleClickForgotPassword = () => router.push("forgotPassword");

  return (
    <SafeAreaView>
      <LinearGradient
        {...{
          colors: ["#9274BB", "#FFDDC2", "#FFF0E5"],
          locations: [-0.4, 0.32, 0.77],
          start: { x: 0.5008741859393584, y: 1.0008711397682535 },
          end: { x: 0.4991258140606416, y: -0.0008711397682534816 },
        }}
        // colors={["#9274BB", "#FFDDC2", "#FFF0E5"]}
        // locations={[-0.4, 0.32, 0.77]}
        // start={{ x: 0.5008741859393584, y: 1.0008711397682535 }}
        // end={{ x: 0.4991258140606416, y: -0.0008711397682534816 }}
        style={{ height: scaleHeight(143) }}
      />
      {/* <View style={{ paddingHorizontal: 40 }}>
        <Spacer size="xxsmall" />
        <CustomText text="Login Screen" type="titleCenter" />
        <Spacer size="xxhuge" />
        <LoginForm onSubmitSuccess={onSubmit} />
        <Spacer size="small" />
        <ButtonText
          onPress={handleClickForgotPassword}
          text="Forgot Password"
          primary
          rounded
          outline
          centered
          // type="centered"
        />
        {isLoading && <CustomText text="Loading...." />}
      </View> */}
    </SafeAreaView>
  );
};
