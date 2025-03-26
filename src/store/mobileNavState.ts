import { create } from "zustand";

interface MobileNavState {
	isOpen: boolean;
	openNav: () => void;
	closeNav: () => void;
}

export const useMobileNavState = create<MobileNavState>((set) => ({
	isOpen: false,
	openNav: () => set({ isOpen: true }),
	closeNav: () => set({ isOpen: false }),
}));
