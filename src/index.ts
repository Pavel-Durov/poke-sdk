import { Config } from './config';
import { Poke } from './poke';
import { Version } from './version';
export default class SDK {
  readonly Poke: Poke;
  constructor() {
    const config = new Config(Version, 'https://pokeapi.co/api/v2');
    this.Poke = new Poke(config);
  }
}
