import React, { useEffect, useState } from 'react';
import { Box, Typography, Modal, Fade, Avatar } from '@mui/material';
import { usePokeModal } from './PokeModalContext';
import PokemonTypes from './PokemonTypes';

const style = {
  position: 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '3px solid #FFCB05',
  boxShadow: 24,
  p: 4,
  textTransform: 'capitalize'
};

const PokeModal = () => {
  const { open, handleClose, selectedPokemon, fetchedData } = usePokeModal();
  const [types, setTypes] = useState([]);

  // Set types when fetchedData changes
  useEffect(() => {
    if (fetchedData == null) return;
    setTypes(fetchedData?.types);
  }, [fetchedData]);

  return (
    selectedPokemon ? (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* Header with Pokemon name, avatar, and ID */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Avatar alt={selectedPokemon.name} src={selectedPokemon.imgUrl} />
              <Typography sx={{ ml: 1, color: 'info.main' }} id="transition-modal-title" variant="h6" component="h2">
                {selectedPokemon.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
                #{selectedPokemon.id}
              </Typography>
            </div>

            {/* Display types, base experience, and weight */}
            <Typography sx={{ mt: 2, flexDirection: 'column', display: 'flex' }}>
              {/* Types section */}
              <>
                <strong>Types:</strong>
              </>
              {/* Render PokemonTypes component if types exist */}
              {types.length > 0 && <PokemonTypes types={types} />}

              {/* Base experience */}
              <>
                <strong>Base Experience:</strong>
                <span>{fetchedData?.base_experience}</span>
              </>

              {/* Weight */}
              <>
                <strong>Weight:</strong>
                <span>{fetchedData?.weight}</span>
              </>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    ) : null
  );
};

export default PokeModal;
