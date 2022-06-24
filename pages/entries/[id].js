import { useContext, useMemo, useState } from 'react';
import { Layout } from '../../components/layouts';
import { dbEntries } from '../../database';
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from '@mui/material';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { EntriesContext } from '../../context/entries';
import { getFormatDistanceNow } from '../../utils';

const validStatus = ['pending', 'in-progress', 'finished'];

export const EntryPage = ({ entry }) => {
  const { updateEntry } = useContext(EntriesContext);
  const [inputvalue, setInputvalue] = useState(entry.description);
  const [status, setStatus] = useState(entry.status);
  const [touched, setTouched] = useState(false);

  const isnotValid = useMemo(() => inputvalue.length <= 0 && touched, [inputvalue, touched])

  const onTextFieldChange = (event) => {
    setInputvalue(event.target.value);
  };

  const onStatusChanged = (event) => {
    setStatus(event.target.value);
  };

  const onSave = () => {
    if( inputvalue.trim().length === 0 ) return;

    const entryToUpdate = {
      ...entry,
      status,
      description: inputvalue
    };

    updateEntry(entryToUpdate, true);
  };

  return (
    <Layout title={ inputvalue.substring(0,20) + '.....'}>
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6} >
          <Card>
            <CardHeader
              title={`Entrada: ${inputvalue}`}
              subheader={`Creada hace ${getFormatDistanceNow(entry.createdAt)}`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                onChange={onTextFieldChange}
                value={inputvalue}
                helperText={isnotValid && 'Ingrese un valor valido'}
                error={isnotValid}
                onBlur={() => setTouched(true)}
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row
                  onChange={onStatusChanged}
                  value={status}
                >
                  {validStatus.map((status) => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveAsOutlinedIcon />}
                fullWidth
                variant='contained'
                onClick={onSave}
                disabled={inputvalue.length <= 0}
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'red'
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Layout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      entry
    }
  }
}
export default EntryPage;