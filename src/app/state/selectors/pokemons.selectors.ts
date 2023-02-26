import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PokemonsState } from 'src/app/core/models/pokemons.state';
//TODO: Es el selector que

export const selectPokemonsFeature = (state: AppState) => state.pokemonsState;

export const listaDePokemons = createSelector(
  selectPokemonsFeature,
  (state: PokemonsState) => state.pokemons
);
export const selectLoading = createSelector(
  selectPokemonsFeature,
  (state: PokemonsState) => state.loading
);
