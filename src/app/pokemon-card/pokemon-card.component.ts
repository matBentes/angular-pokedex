import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input()
  public pokemon: Pokemon;

  constructor() {}

  ngOnInit(): void {}
}
