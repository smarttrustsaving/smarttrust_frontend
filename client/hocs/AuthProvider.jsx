import { useState, useEffect, createContext } from "react";
import axios from "../axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    accessToken: null,
    authenticated: false,
    checked: false,
  });

  useEffect(() => {
    function everything() {
      axios
        .post(
          `/auth/check`,
          {},
          {
            withCredentials: true,
          }
        )
        .then(({ data }) => {
          setState({
            user: data.user,
            accessToken: data.accessToken,
            checked: true,
            authenticated: true,
          });

          axios.defaults.headers["access-token"] = data.accessToken;
        })
        .catch((error) => {
          console.log({ error });
          setState({
            ...state,
            checked: true,
          });
        });
    }

    everything();

    const interval = setInterval(everything, 9 * 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          ...state,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
