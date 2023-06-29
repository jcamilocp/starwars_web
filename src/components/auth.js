import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout, signup } from "../requests/client";
import { addSession, deleteSession, findSession } from "../db/sessions";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState({});
  const navigate = useNavigate();

  const MESSAGE_TYPES = {
    success: "success",
    error: "error",
  };

  useEffect(() => {
    findSession().then((result) => {
      const dbUser = result[0];
      if(dbUser){
        setUser(dbUser);
        setToken(dbUser.token);
      }
    })
  });

  const signUpUser = ({email, password, passwordConfirmation}) => {
    signup({user: {email, password, password_confirmation: passwordConfirmation}})
      .then((response) => {
        const messageText = response.data.status.message;
        if(response.status === 200){
          setMessage({text: `${messageText} Now you can log in.`, type: MESSAGE_TYPES.success});
          navigate("/login");
        }
      })
      .catch((err) => {
        if(err.response){
          const errorText = err.response.data.status.message;
          setMessage({text: errorText, type: MESSAGE_TYPES.error})
        } else {
          setMessage({text: "An unexpected error occurred.", type: MESSAGE_TYPES.error})
        }
      });
  };

  const loginUser = ({email, password}) => {
    login({user: {email, password}})
      .then((response) => {
        if(response.status === 200){
          const receivedUser = response.data.status.data.user;
          const receivedToken = response.headers.authorization;
          const messageText = response.data.status.message;
          addSession({ email: receivedUser.email, token: receivedToken})
            .then((dbUser) => {
              setUser(dbUser);
              setToken(dbUser.token);
              setMessage({text: messageText, type: MESSAGE_TYPES.success});
              navigate("/");
            });
        }
      })
      .catch((err) => {
        if(err.response){
          const errorText = err.response.data.error;
          setMessage({text: errorText, type: MESSAGE_TYPES.error})
        } else {
          setMessage({text: "An unexpected error occurred.", type: MESSAGE_TYPES.error})
        }
      });
  };

  const logoutUser = () => {
    logout(token)
      .then((response) => {
        if(response.status === 200){
          deleteSession(user.id).then(() => {
            setUser(null);
            setToken(null);
            setMessage({text: response.data.message, type: MESSAGE_TYPES.success});
            navigate("/login");
          });
        }
      })
      .catch((err) => {
        if(err.response.status === 500)
          console.log(err.response)
      });
  };

  const setUpMessage = (response, type) => {
    setMessage({text: response, type})
  };

  const processSessionExpired = () => {
    logoutUser();
    setMessage({
      text: "Session Expired. Please Log in again.",
      type: MESSAGE_TYPES.error
    });
  };

  const auth = {
    user,
    token,
    message,
    MESSAGE_TYPES,
    loginUser,
    logoutUser,
    signUpUser,
    setUpMessage,
    processSessionExpired,
  };

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
