import { useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./";

export const initialState = {
  entries: []
};


export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, initialState);

  return (
    <EntriesContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
};