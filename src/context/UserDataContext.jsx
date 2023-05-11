import { createContext, useState } from "react";
import {diaryDreamsData} from '../mock-data/mockData'; 

export const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {

const [state, setState] = useState("cankat"); 
const [diaryDreams, setDiaryDreams] = useState(diaryDreamsData);


  return (
    <UserDataContext.Provider
      value={{
   state,
   setState,
   diaryDreams,
   setDiaryDreams
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
