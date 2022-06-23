import { Layout } from '../../components/layouts';
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
import { useMemo, useState } from 'react';

const validStatus = ['pending', 'in-progress', 'finished'];

export const EntryPage = () => {
  const [inputvalue, setInputvalue] = useState('');
  const [status, setStatus] = useState('pending');
  const [touched, setTouched] = useState(false);


  const isnotValid = useMemo(() => inputvalue.length <= 0 && touched, [inputvalue, touched])

  const onTextFieldChange = (event) => {
    setInputvalue(event.target.value);
  };

  const onStatusChanged = (event) => {
    setStatus(event.target.value);
  };

  const onSave = () => {

  };

  return (
    <Layout title='Detail entry'>
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6} >
          <Card>
            <CardHeader
              title={`Entrada: ${inputvalue}`}
              subheader='Creada ....'
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

export default EntryPage;