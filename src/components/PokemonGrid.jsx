import PokemonCard from './PokemonCard';
import { Box, Grid } from '@mui/material';
import PokeModal from './PokeModal';
import { PokeModalProvider } from './PokeModalContext';

const PokemonGrid = ({ pokemons }) => (
    <PokeModalProvider>
        <Grid item sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {pokemons.map((pokemon, ind) => (
                    <PokemonCard key={ind} pokemon={pokemon} />
                ))}
            </Grid>
        </Grid>
        <PokeModal />
    </PokeModalProvider>
);
export default PokemonGrid