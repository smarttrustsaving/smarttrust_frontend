import React from "react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../components/Loading";

export const loggedIn = (Component) => {
  return () => {
    const { authenticated, checked } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (checked) {
        /**
         *
         *
         */
        if (authenticated) {
          window.location.href = "/adminpanel/";
          /**
           *
           *
           */
        } else {
          setLoading(false);
        }
      }
    }, [authenticated, checked]);

    if (loading) return <Loading />;

    return <Component />;
  };
};

export const loggedOut = (Component) => {
  return () => {
    const { checked, authenticated } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (checked) {
        if (authenticated) {
          setLoading(false);
        } else {
          window.location.href = "/admin/";
        }
      }
    }, [authenticated, checked]);

    if (loading) return <Loading />;

    return <Component />;
  };
};
