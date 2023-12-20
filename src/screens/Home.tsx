import { Button } from "@components/Button";
import { useTodos } from "@hooks/todos";
import { useCounter } from "@zustand/counter/counterSlice";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export const Home = () => {
  const { counter, increment, decrement } = useCounter();
  const { todosData, todosError } = useTodos();

  const formMethods = useForm();
  const { control } = formMethods;

  const handleClickIncrement = () => increment();
  const handleClickDecrement = () => decrement();

  const router = useRouter();

  useEffect(() => {
    if (counter === 2) {
      router.push("(tabs)");
    }
  }, [counter]);

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 30 }}>
        <FormProvider {...formMethods}>
          <Controller
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={{ backgroundColor: "gray", width: "100%", padding: 10 }}
              />
            )}
            control={control}
            name={"teste"}
          />
        </FormProvider>

        <Text style={{ textAlign: "center", fontSize: 26 }}>{counter}</Text>
        <View style={styles.containerButtons}>
          <Button onPress={handleClickDecrement}>
            <Text>Decrement</Text>
          </Button>
          <Button onPress={handleClickIncrement}>
            <Text>Increment</Text>
          </Button>
        </View>
        {todosData && <Text>{JSON.stringify(todosData)}</Text>}
        {!todosData && (
          <Text>{todosError ? todosError.message : "Loading..."}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 50,
    flex: 1,
  },
});
