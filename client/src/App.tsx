


import { BrowserRouter as Router, } from "react-router-dom";
import Auth from "./auth";
import Routes from "./page"
import { createContext, useContext, useReducer } from 'react';

export const authContext = createContext(null);

export default function App() {

  const initialTodos =
  {
    name: {},
    isLogin: false
  };


  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          user: action?.payload,
          isLogin: true
        }
      case "LOGOUT":
        return {
          name: {},
          isLogin: false
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialTodos);


  return (
    <Router>
      <authContext.Provider value={{ ...state, dispatch }}>
        {state.isLogin ? (
          <Routes />
        ) : (
          <Auth />
        )}
      </authContext.Provider>
    </Router>
  )
}
