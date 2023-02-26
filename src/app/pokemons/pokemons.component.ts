import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from '../core/models/Pokemon.model';
import { AppState } from '../state/app.state';
import {
  listaDePokemons,
  selectLoading,
} from '../state/selectors/pokemons.selectors';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  loading$: Observable<boolean> = new Observable();
  pokemons$: Observable<readonly Pokemon[]> = new Observable();

  constructor(private store: Store<AppState>) {
    this.loading$ = this.store.select(selectLoading);
    this.pokemons$ = this.store.select(listaDePokemons);
  }
}
