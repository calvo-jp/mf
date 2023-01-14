import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface GlobalStore {
  authenticated: boolean;
  authenticate(value: boolean): void;
}

export const useGlobalStore = create<GlobalStore>()(
  devtools((set) => ({
    authenticated: false,
    authenticate(authenticated) {
      return set({ authenticated });
    },
  }))
);
