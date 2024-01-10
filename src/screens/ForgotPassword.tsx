import {
  ForgotPasswordForm,
  ForgotPasswordFormData,
} from "@components/organisms/ForgotPasswordForm";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    router.replace("login");
    setIsLoading(false);
  };

  const handleBackPress = () => router.back();

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 40 }}>
        <View style={{ height: 30 }} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={handleBackPress}
            style={{
              padding: 20,
              width: 60,
              marginLeft: -40,
              alignSelf: "flex-start",
              position: "absolute",
            }}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Forgot Screen
          </Text>
        </View>
        <View style={{ height: 100 }} />
        <ForgotPasswordForm onSubmitSuccess={onSubmit} />
        {isLoading && <Text>Loading....</Text>}
      </View>
    </SafeAreaView>
  );
};
