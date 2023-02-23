import {useContext,createContext} from 'react';

const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    return (
        <AuthContext.Provider  value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export const userAuth=()=>{
    return useContext(AuthContext)
} 