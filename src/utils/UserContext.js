import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "default user",
});

export default UserContext;
