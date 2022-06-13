import { useEffect, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./index";
import { v4 as uuidv4 } from 'uuid';
import { addEntry, getEntriesReducer, updateEntryReducer } from "./EntriesReducer";
import { entriesApi } from "../../apis";


export const initialState = {
  entries: [
  ],
};


export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, initialState);

  const addNewEntry = ( description ) => {
    const entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    }

    dispatch(addEntry(entry));
  };

  const updateEntry = (entry) => {
    dispatch(updateEntryReducer(entry));
  };

  const refresEntries = async () => {
    const { data: { entries} }  = await entriesApi.get('/entries');

    dispatch(getEntriesReducer(entries));
  };

  useEffect(() => {
    refresEntries();
  }, []);
  

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
        updateEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
};