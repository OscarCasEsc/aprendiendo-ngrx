import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Pokemon } from './core/models/Pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor() {}

  getPokemons(): Observable<Pokemon[]> {
    let pokemons: Pokemon[] = [
      { name: 'Bulbasur', type: 'Planta', generation: '1', img: '' },
      { name: 'Ivysaur', type: 'Planta', generation: '1', img: '' },
      { name: 'Venusaur', type: 'Planta', generation: '1', img: '' },
      { name: 'Charmander', type: 'Fuego', generation: '1', img: '' },
      { name: 'Charmeleon', type: 'Fuego', generation: '1', img: '' },
      { name: 'Charizard', type: 'Fuego', generation: '1', img: '' },
      { name: 'Squirtle', type: 'Agua', generation: '1', img: '' },
      { name: 'Wartortle', type: 'Agua', generation: '1', img: '' },
      { name: 'Blastoise', type: 'Agua', generation: '1', img: '' },
    ];
    return of(pokemons).pipe(delay(1500));
  }
}
