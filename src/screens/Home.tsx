import { ButtonText } from "@components/molecules/ButtonText";
import { useTodos } from "@hooks/todos";
import { useCounter } from "@zustand/counter/counterSlice";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export const Home = () => {
  const { counter, increment, decrement } = useCounter();
  const { todosData, todosError } = useTodos();

  const handleClickIncrement = () => increment();
  const handleClickDecrement = () => decrement();

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={{ textAlign: "center", fontSize: 26 }}>{counter}</Text>
        <View style={styles.containerButtons}>
          <ButtonText onPress={handleClickDecrement} text="Decrement" />
          <ButtonText onPress={handleClickIncrement} text="Increment" />
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
