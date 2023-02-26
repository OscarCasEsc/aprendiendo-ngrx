import { Pokemon } from './Pokemon.model';

export interface PokemonsState {
  loading: boolean;
  pokemons: ReadonlyArray<Pokemon>;
}
