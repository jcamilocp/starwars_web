import { createContext, useContext, useState } from "react";
import { login, logout } from "../requests/client";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginUser = ({email, password}) => {
    login({user: {email, password}})
      .then((response) => {
        if(response.status === 200){
          setUser(response.data.status.data.user);
          setToken(response.headers.authorization);
          navigate('/');
        }
      });
  };

  const logoutUser = () => {
    logout(token)
      .then((response) => {
        if(response.status === 200){
          setUser(null);
          setToken(null);
          navigate('/login');
        }
      });
  };

  const auth = { user, token, loginUser, logoutUser };

  return(
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth
}

export {
  AuthProvider,
  useAuth,
};
