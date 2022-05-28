import { useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { EntriesContext } from '../../context/entries';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext)

  const onSave = () => {
    if(inputValue.length === 0) return ;

    addNewEntry(inputValue);
    setInputValue('');
    setTouched(false);
    setIsAdding(false);
  };


  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 2
      }}
    >
      {!isAdding ? (

        <Button
          startIcon={<AddCircleOutlineIcon />}
          variant='outlined'
          fullWidth
          onClick={() => setIsAdding(true)}
        >
          Agregar tarea
        </Button>
      ) : (
        <>
          <TextField
            fullWidth
            sx={{
              marginTop: 2,
              marginBottom: 1
            }}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          />

          <Box display='flex' justifyContent='space-between'>
            <Button
              color='primary'
              onClick={() => setIsAdding(false)}
            >
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
