const React = require('react');
// import GlobalContextProvider from './src/context/GlobalContextProvider';
const GlobalContextProvider = require('./src/context/GlobalContextProvider').default;

export const wrapPageElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);
