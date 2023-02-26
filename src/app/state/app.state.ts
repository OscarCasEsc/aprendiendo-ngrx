import { ActionReducerMap } from '@ngrx/store';
import { PokemonsState } from '../core/models/pokemons.state';
import { pokemonReducer } from './reducers/pokemons.reducers';

export interface AppState {
  pokemonsState: PokemonsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pokemonsState: pokemonReducer,
};
