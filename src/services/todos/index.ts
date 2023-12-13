import { HttpGet } from "@services/https";

export const getTodos = async (id: number) => {
  try {
    const { data } = await HttpGet<TodosResponse>(`todos/${id}`);

    return data;
  } catch (error) {
    throw new Error("failed to get todos");
  }
};
