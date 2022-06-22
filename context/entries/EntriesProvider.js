import { useEffect, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./index";
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

  const updateEntry = async (entry) => {
    try {
      const { data } = await entriesApi.put(`/entries/${entry._id}`, entry);
      dispatch(updateEntryReducer(data));
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const refreshEntries = async () => {
    const { data: { entries } } = await entriesApi.get('/entries');
    dispatch(getEntriesReducer(entries));
  };

  useEffect(() => {
    refreshEntries();
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