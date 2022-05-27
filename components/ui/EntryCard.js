import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

export const EntryCard = ({ entry }) => {

  return (
    <Card sx={{marginBottom: 1}} >
      <CardContent>
        <Typography xs={{ whiteSpace: 'pre-line' }}> {entry.description} </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2}}>
        <Typography variant='body2'> Ago 30 minutes</Typography>
      </CardActions>
    </Card>
  )
}
