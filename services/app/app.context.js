import axios from 'axios';
import React, { createContext } from 'react';

export const defaultState = {};

export const AppContext = createContext(defaultState);

import hello from './hello';

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ hello }}>{children}</AppContext.Provider>
  );
};
