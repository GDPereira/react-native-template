import { create } from "zustand";

const initialState: CounterState = {
  counter: 0,
};

export const useCounter = create<CounterState & CounterActions>()((set) => ({
  ...initialState,
  decrement: () => set((state) => ({ ...state, counter: state.counter - 1 })),
  increment: () => set((state) => ({ ...state, counter: state.counter + 1 })),
}));
