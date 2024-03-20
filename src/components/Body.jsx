import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import PokemonGrid from './PokemonGrid';
import LoadingSpinner from './LoadingSpinner';
import Buttons from './Buttons';

function Body() {
  const [url, setUrl] = useState(import.meta.env.VITE_POKEMON_URL);
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data from the API based on the provided URL
  const fetchResults = async () => {
    try {
      setLoading(true);
      const { data } = await axios(url);
      setPokemons(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    } catch (err) {
      console.error('Error fetching data:', err);
      setPokemons([]);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchResults when the URL changes
  useEffect(() => {
    fetchResults();
  }, [url]);

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.default',
        py: 2,
        px: 5
      }}
    >
      {/* Navigation buttons to fetch previous and next pages */}
      <Buttons nextUrl={nextUrl} setUrl={setUrl} prevUrl={prevUrl} />

      {/* Show a loading spinner while data is being fetched */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        // Render the PokemonGrid component with fetched data
        <PokemonGrid pokemons={pokemons} />
      )}

      {/* Navigation buttons again at the bottom of the page */}
      <Buttons nextUrl={nextUrl} setUrl={setUrl} prevUrl={prevUrl} />
    </Box>
  );
}

export default Body;
