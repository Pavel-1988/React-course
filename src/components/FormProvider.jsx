const { createContext } = require('react')
const formContext = createContext();

export const FormProvider = ({ children }) => {
  return <formContext.Provider value={'form provider context value'}>{ children }</formContext.Provider>
}