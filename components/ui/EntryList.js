import { useContext, useMemo } from 'react';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import { EntryCard } from './EntryCard';

import { List, Paper } from '@mui/material';

import styles from './EntryList.module.css';

export const EntryList = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDraggingUI } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter(entries => entries?.status === status), [entries]);

  const onDropEntry = (event) => {
    const id = event.dataTransfer.getData('text');

    const entryUpdate = entries.filter((entry) => entry._id === id);
    entryUpdate[0].status = status;

    updateEntry(entryUpdate[0]);
    endDraggingUI();
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          '&::-webkit-scrollbar': { display: 'none' },
          padding: '1px 5px',
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.2 : 1,
            transition: 'all .3s'
          }}
        >
          {
            entriesByStatus.map((entry) => (
              <EntryCard
                key={entry._id}
                entry={entry}
              />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
