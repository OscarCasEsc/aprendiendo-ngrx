import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/core/models/Pokemon.model';

export const loadPokemons = createAction('[Pokemons] Load Pokemons');
export const loadedPokemons = createAction(
  '[Pokemons] Loaded Pokemons',
  props<{ pokemons: Pokemon[] }>()
);
