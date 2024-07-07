import { create } from "zustand";

type userUpdate = {
  loggedInUser: boolean;
  setLoggedInUserStatus: (status: boolean) => void;
};

const userStatus = create<userUpdate>()((set) => ({
  loggedInUser: false,
  setLoggedInUserStatus: (status: boolean) => set({ loggedInUser: status }),
}));

export default userStatus;
