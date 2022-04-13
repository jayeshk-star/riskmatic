import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import { cookieLoad, decodeToken } from '../cookie';

const StateContext = createContext();

// Add intial state of store
const initialState = {
  isLogin: false,
  role: '',
  alert: {
    severity: 'success',
    isOpen: false,
    label: 'Success'
  },
  socketIO: null
};

if (decodeToken(cookieLoad())) {
  const { role } = decodeToken(cookieLoad());
  initialState.isLogin = true;
  initialState.role = role;
}

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
