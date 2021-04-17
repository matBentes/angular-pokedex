import { Component } from '@angular/core';
import { Pokemon } from '../_model/Pokemon';
import { Type } from '../_model/Type';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  // public pokemons: Pokemon[] = [
  //   {
  //     number: '1',
  //     image:
  //       'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  //     name: 'Bulbasaur',
  //     types: [Type.Grass, Type.Poison],
  //   },
  //   {
  //     number: '2',
  //     image:
  //       'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
  //     name: 'Ivysaur',
  //     types: [Type.Grass, Type.Poison],
  //   },
  //   {
  //     number: '1',
  //     image:
  //       'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
  //     name: 'Bulbasaur',
  //     types: [Type.Grass, Type.Poison],
  //   },
  //   {
  //     number: '4',
  //     image:
  //       'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
  //     name: 'Charmander',
  //     types: [Type.Fire],
  //   },
  // ];
  constructor(public pokemonService: PokemonService) {}
}
