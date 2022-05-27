import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);

  const addEntry = () => setIsAdding(true);
  const cancelEntry = () => setIsAdding(false);

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
          onClick={addEntry}
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
            helperText='Ingrese un valor'
          />
          <Box display='flex' justifyContent='space-between'>
            <Button
              color='primary'
              onClick={cancelEntry}
            >
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveIcon />}
            >
              Guardar
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
