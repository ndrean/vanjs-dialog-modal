import { createStore } from "zustand/vanilla";

const useDataStore = createStore((set) => ({
  formData: {},
  agreement: false,
}));

export default useDataStore;
