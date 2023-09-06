import { create } from "zustand";

const useUsersStore = create((set) => ({
  userId: null,
  setActiveUserId: (id) =>
    set(() => ({
      userId: id,
    })),
}));

export default useUsersStore;
