import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, Skeleton, Avatar, Box } from '@mui/material';
import { getPokemonIdFromUrl, stringAvatar } from '../assets/utils';
import { usePokeModal } from './PokeModalContext';

const PokemonCard = ({ pokemon }) => {
  const pokemonId = getPokemonIdFromUrl(pokemon?.url);
  const imgUrl = `${import.meta.env.VITE_POKEMON_IMG}${pokemonId}.png`;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Access the setSelectedPokemon function from PokeModalContext
  const { setSelectedPokemon } = usePokeModal();

  const cardStyles = {
    container: {
      margin: 'auto',
      maxWidth: 300,
      boxShadow: 2,
      marginY: 2,
      background: '#F2F2F2',
      paddingY: 4,
      transition: 'transform 0.2s',
      cursor: 'pointer',
      transform: 'scale(1)',
      "&:hover": {
        transform: 'scale(1.05)'
      }
    },
    imageBox: {
      display: 'block',
      margin: 'auto',
      width: 180,
      height: 180,
      borderRadius: 3,
      border: '3px solid #FFCB05',
      overflow: 'hidden',
    },
  };

  // Callback function when the image is loaded
  const handleImageLoaded = () => setImageLoaded(true);

  // Callback function when there is an error loading the image
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      {/* Card component representing a Pokemon */}
      <Card onClick={() => setSelectedPokemon({
        id: parseInt(pokemonId),
        name: pokemon?.name,
        imgUrl
      })}
        sx={cardStyles.container}
      >
        {/* Show skeleton loading effect while image is loading */}
        {!imageLoaded && !imageError && (
          <Skeleton animation="wave" variant="rectangular" sx={{ ...cardStyles.imageBox }} />
        )}

        {/* Show the Pokemon image if loaded successfully */}
        {!imageError && (
          <Box sx={{ ...cardStyles.imageBox, display: imageLoaded ? 'block' : 'none' }}>
            <Avatar
              variant="square"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', background: '#fff' }}
              alt={pokemon?.name}
              src={imgUrl}
              onLoad={handleImageLoaded}
              onError={handleImageError}
            />
          </Box>
        )}

        {/* Show placeholder Avatar if there was an error loading the image */}
        {imageError && (
          <Box sx={{ ...cardStyles.imageBox, display: 'block' }}>
            <Avatar
              variant="square"
              style={{ width: '100%', height: '100%' }}
              alt={pokemon?.name}
              {...stringAvatar(pokemon?.name)}
            />
          </Box>
        )}

        {/* Card content displaying Pokemon name and ID */}
        <CardContent>
          <Typography variant="h6" component="div" sx={{ textTransform: 'capitalize', color: 'info.main' }}>
            {pokemon?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
            ID: {pokemonId}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
