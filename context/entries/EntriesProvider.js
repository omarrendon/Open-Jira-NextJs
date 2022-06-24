import { useEffect, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./index";
import { addEntry, getEntriesReducer, updateEntryReducer } from "./EntriesReducer";
import { entriesApi } from "../../apis";
import { useSnackbar } from 'notistack';

export const initialState = {
  entries: [
  ],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, initialState);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const addNewEntry = async (description) => {
    const { data } = await entriesApi.post('/entries', {
      description
    });
    const { entryCreated } = data;
    dispatch(addEntry(entryCreated));
  };

  const updateEntry = async (entry, showSnackBar = false) => {
    try {
      const { data } = await entriesApi.put(`/entries/${entry._id}`, entry);
      dispatch(updateEntryReducer(data));

      if (showSnackBar) {
        enqueueSnackbar('Registro editado!', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top',
          }
        })
      }
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