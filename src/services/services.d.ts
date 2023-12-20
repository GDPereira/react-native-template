type HttpMethod = "post" | "get" | "put";

interface TodosResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
