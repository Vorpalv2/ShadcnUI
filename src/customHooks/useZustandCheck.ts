"use client";
import userStatus from "@/store";

const isUserLoggedIn = userStatus((state) => state.loggedInUser);

const setUserLoggedInStatus = userStatus(
  (state) => state.setLoggedInUserStatus
);

export { isUserLoggedIn, setUserLoggedInStatus };

//this is only usable in case we go for client side.
