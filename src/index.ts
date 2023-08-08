import { Config } from './config';
import { Poke } from './poke';

export default class SDK {
  readonly Poke: Poke;
  constructor() {
    const config = new Config('0.0.1', 'https://pokeapi.co/api/v2');
    this.Poke = new Poke(config);
  }
}
