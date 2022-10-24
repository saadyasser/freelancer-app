import { createContext, useState } from "react";
const id = localStorage.getItem('token');
const AuthContext = createContext( {
    token:id,
    isLoggedIn: !!id,
    setTokenId: (token) => {},
    removeToken: () => {}
});

export const AuthContextProvider = ({children}) => {
    
    const [token, setToken] = useState(id);
    const setTokenId = (tokenId) => {
        setToken(tokenId);
    }
    const removeToken = () => {
        setToken(null);
    }
    const contextValue = {
        token,
        isLoggedIn:  !!token,
        setTokenId,
        removeToken,
      };
    
      return (
      <AuthContext.Provider value={contextValue} >
        {children}
      </AuthContext.Provider>
      );
}

export default AuthContext;