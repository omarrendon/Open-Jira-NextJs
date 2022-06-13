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

  const addNewEntry = async (description) => {
    const { data } = await entriesApi.post('/entries', {
      description
    });
    const { entryCreated } = data;
    dispatch(addEntry(entryCreated));
  };

  const updateEntry = (entry) => {
    dispatch(updateEntryReducer(entry));
  };

  const refresEntries = async () => {
    const { data: { entries } } = await entriesApi.get('/entries');

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