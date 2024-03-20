import React from 'react';
import { Chip } from '@mui/material';

const PokemonTypes = ({ types }) => {
  return types !== undefined ? (
    <div sx={{ display: 'flex' }}>
      {types.map((data, index) => (
        <Chip color='info' sx={{ mr: 1 }} label={data?.type?.name} variant="outlined" />
      ))}
    </div>
  ) : <></>;
};

export default PokemonTypes;