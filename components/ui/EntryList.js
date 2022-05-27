import { List, Paper } from '@mui/material'
import { useContext, useMemo } from 'react'
import { EntriesContext } from '../../context/entries'
import { EntryCard } from './EntryCard'

export const EntryList = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(() => entries.filter(entries => entries.status === status), [entries]);

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          '&::-webkit-scrollbar': { display: 'none' },
          padding: '1px 5px',
        }}
      >
        <List sx={{ opacity: 1 }}>
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
