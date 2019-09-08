import React from 'react';
import GlobalContextProvider from './src/context/GlobalContextProvider';

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);
