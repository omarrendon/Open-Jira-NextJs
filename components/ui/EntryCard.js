import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContex';

export const EntryCard = ({ entry }) => {
  const { startDraggingUI, endDraggingUI } = useContext(UIContext);
  const router = useRouter();

  const onRedirectToDetailEntry = () => router.push(`/entries/${entry._id}`);

  const onDragStart = (event) => {
    event.dataTransfer.setData("text", entry._id);
    startDraggingUI();
  };

  const onDragEnd = ( event ) => {
    endDraggingUI()
  };

  return (
    <Card
      onClick={onRedirectToDetailEntry}
      sx={{
        marginBottom: 1,
        cursor: 'pointer'
      }}
      draggable
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
    >
      <CardContent>
        <Typography xs={{ whiteSpace: 'pre-line' }}> {entry.description} </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
        <Typography variant='body2'> Ago 30 minutes</Typography>
      </CardActions>
    </Card>
  )
}
