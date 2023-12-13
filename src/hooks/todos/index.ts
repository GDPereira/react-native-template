import { MAX_RETRY } from "@constants/http";
import { getTodos } from "@services/todos";
import { useQuery } from "@tanstack/react-query";
import { useCounter } from "@zustand/counter/counterSlice";

export const useTodos = () => {
  const { counter } = useCounter();

  const { data: todosData, error: todosError } = useQuery({
    queryKey: ["todos", counter],
    queryFn: () => getTodos(counter),
    retry: MAX_RETRY,
  });

  return { todosData, todosError };
};
