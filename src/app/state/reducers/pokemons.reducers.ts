import { createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/Pokemon.model';
import { PokemonsState } from 'src/app/core/models/pokemons.state';
import { loadedPokemons, loadPokemons } from '../actions/pokemons.actions';

export const initialState: PokemonsState = { loading: false, pokemons: [] };

export const pokemonReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedPokemons, (state, props) => {
    return { ...state, loading: false, pokemons: props.pokemons };
  })
);
