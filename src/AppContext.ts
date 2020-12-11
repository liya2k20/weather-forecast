import React from 'react';

export type AppContextConfig = { [key: string]: any };
export const defaultValue: AppContextConfig = {
  refreshRate: 5000,
};
let appConfig = defaultValue;

export const getAppConfig = () => appConfig;
const AppContext = React.createContext<AppContextConfig>(appConfig);
export default AppContext;
