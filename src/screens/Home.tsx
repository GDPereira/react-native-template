import { Button } from "@components/Button";
import { useTodos } from "@hooks/todos";
import { useCounter } from "@zustand/counter/counterSlice";
import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
  const { counter, increment, decrement } = useCounter();
  const { todosData, todosError } = useTodos();

  const handleClickIncrement = () => increment();
  const handleClickDecrement = () => decrement();

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
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
