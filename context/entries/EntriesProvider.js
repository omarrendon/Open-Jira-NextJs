import { useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./index";
import { v4 as uuidv4 } from 'uuid';
import { addEntry } from "./EntriesReducer";


export const initialState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'This is a description test',
      createdAt: Date.now(),
      status: 'pending',
    },
    {
      _id: uuidv4(),
      description: 'This is a description test 2',
      createdAt: Date.now() - 1000000,
      status: 'in-progress',
    },
    {
      _id: uuidv4(),
      description: 'This is a description test 3',
      createdAt: Date.now() - 100000,
      status: 'finished',
    },
    {
      _id: uuidv4(),
      description: 'This is a description test 4',
      createdAt: Date.now() - 10000, 
      status: 'pending',
    },
  ]
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

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
};