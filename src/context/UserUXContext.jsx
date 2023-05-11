import { createContext, useState } from "react";

export const UserUXContext = createContext();

const UserUXContextProvider = ({ children }) => {

const [whichDoctor, setWhichDoctor] = useState(null);
const [dreamAnalized , setDreamAnalized] = useState(false);


  return (
    <UserUXContext.Provider
      value={{
        whichDoctor,
        setWhichDoctor,
        dreamAnalized,
        setDreamAnalized
      }}
    >
      {children}
    </UserUXContext.Provider>
  );
};

export default UserUXContextProvider;
