import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon } from '../_model/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: Pokemon[] = [];
  constructor(private httpClient: HttpClient) {
    const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    this.httpClient
      .get<any>(URL_POKEMON)
      .pipe(
        // fetch the first api and return the result
        map((data) => data.results),
        // make a new request for each result returned
        map((results) => {
          return from(results).pipe(
            mergeMap((result: any) => this.httpClient.get(result.url))
          );
        }),
        mergeMap((result) => result) // return each result from previous step
      )
      // return a array with this objects of pokemons
      .subscribe((result: any) => {
        const pokemon: Pokemon = {
          number: result.id.toString(),
          name: result.name,
          // image: result.sprites.front_default,
          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${result.id
            .toString()
            .padStart(3, '0')}.png`,
          types: result.types.map((t: any) => t.type.name),
        };

        this.pokemons[result.id] = pokemon;
      });

    console.log(this.pokemons);
  }
}
