import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const PokeModalContext = createContext();

export const usePokeModal = () => {
  const context = useContext(PokeModalContext);
  if (!context) {
    throw new Error('usePokeModal must be used within a PokeModalProvider');
  }
  return context;
};

export const PokeModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Function to open the modal
  const handleOpen = () => setOpen(true);

  // Function to close the modal
  const handleClose = () => setOpen(false);

  // Fetch Pokemon data when a Pokemon is selected
  useEffect(() => {
    if (selectedPokemon === null) return;

    const fetchPokemon = async (id) => {
      try {
        setOpen(true);
        const res = await axios(`${import.meta.env.VITE_POKEMON_URL}${id}`);
        setFetchedData(res?.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPokemon(selectedPokemon.id);

  }, [selectedPokemon]);

  // Clear fetched data when modal is closed
  useEffect(() => {
    if (!open) setFetchedData(null);
  }, [open]);

  return (
    <PokeModalContext.Provider
      value={{ open, setSelectedPokemon, handleOpen, handleClose, selectedPokemon, fetchedData }}
    >
      {children}
    </PokeModalContext.Provider>
  );
};

