import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout, signup } from "../requests/client";
import { addSession, deleteSession, findSession } from "../db/sessions";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    findSession().then((result) => {
      const dbUser = result[0];
      if(dbUser){
        setUser(dbUser);
        setToken(dbUser.token);
      }
    })
  }, []);

  const signUpUser = ({email, password, passwordConfirmation}) => {
    signup({user: {email, password, password_confirmation: passwordConfirmation}})
      .then((response) => {
        if(response.status === 200){
          navigate('/login');
        }
      });
  };

  const loginUser = ({email, password}) => {
    login({user: {email, password}})
      .then((response) => {
        if(response.status === 200){
          const receivedUser = response.data.status.data.user;
          const receivedToken = response.headers.authorization;
          addSession({ email: receivedUser.email, token: receivedToken})
            .then((dbUser) => {
              setUser(dbUser);
              setToken(dbUser.token);
              navigate('/');
            });
        }
      });
  };

  const logoutUser = () => {
    logout(token)
      .then((response) => {
        if(response.status === 200){
          deleteSession(user.id);
          setUser(null);
          setToken(null);
          navigate('/login');
        }
      });
  };

  const auth = { user, token, loginUser, logoutUser, signUpUser };

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
