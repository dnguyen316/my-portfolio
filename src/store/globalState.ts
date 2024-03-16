import { create } from "zustand";

const useStore = create((set) => ({
  activeSection: "",
  updateActiveSection: (newSection: string) =>
    set({ activeSection: newSection }),
}));

export default useStore;
