import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from '../core/models/Pokemon.model';
import { PokemonsService } from '../pokemons.service';
import {
  loadedPokemons,
  loadPokemons,
} from '../state/actions/pokemons.actions';
import { AppState } from '../state/app.state';
import { selectLoading } from '../state/selectors/pokemons.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  constructor(
    private store: Store<AppState>,
    private pokemonsService: PokemonsService
  ) {}
  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.pokemonsService.getPokemons().subscribe((res: Pokemon[]) => {
      this.store.dispatch(loadedPokemons({ pokemons: res }));
    });
    this.store.dispatch(loadPokemons());
  }
}
