import { children, createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const initialState ={
        users : null,
        user : null,
    }
    
    const [state , dispatch] = useReducer(UserReducer,initialState)

    return(
     <UserContext.Provider value={{...state,dispatch }}>
        {children}
     </UserContext.Provider>
    )
}

export default UserContext;