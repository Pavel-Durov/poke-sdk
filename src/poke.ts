import axios from 'axios';
import { join } from 'path';
import { Config } from './config';
import { Nature, Pokemon, Stat } from './types';
import { PokeApiError } from './errors';

export class Poke {
  constructor(private config: Config) {
    this.config = config;
  }

  async request<T>(path: string): Promise<T> {
    let result = undefined;
    const url = new URL(this.config.BaseUrl);
    url.pathname = join(url.pathname, path);
    try {
      const { data } = await axios.get(url.href, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': this.config.UserAgent
        }
      });
      result = data;
    } catch (e) {
      throw new PokeApiError(e.message);
    }
    return result;
  }
  /**
   *
   * Get a Pokemon by ID or Name
   *
   * @param id numeric id or name of the Pokemon
   *
   * @example
   * ```ts
   * getStat('1')
   * getStat('bulbasaur')
   * ```
   *
   * @returns {Promise<Pokemon>} The Pokemon
   * @see {@link https://pokeapi.co/docs/v2#pokemon}
   */
  async getPokemon(id: string): Promise<Pokemon> {
    return this.request(`/pokemon/${id}`);
  }

  /**
   * Get a Pokemon nature by ID or Name. Natures influence how a Pokemon's stats grow.
   *
   * @param id numeric id or name of the nature
   *
   * @example
   * ```ts
   * getNature('1')
   * getNature('hardy')
   * ```
   *
   * returns {Promise<Pokemon>} The Pokemon Nature
   * @see {@link https://pokeapi.co/docs/v2#natures}
   */
  async getNature(id: string): Promise<Nature> {
    return this.request(`/nature/${id}`);
  }
  /**
   *
   * Get a Pokemon Stat by ID or Name. Stats determine certain aspects of battles.
   *
   * @param id numeric id or name of the statistic
   *
   * @example
   * ```ts
   * getStat('1')
   * getStat('hp')
   * ```
   *
   * @returns {Promise<Stat>} The Stat
   * @see {@link https://pokeapi.co/docs/v2#stats}
   */
  async getStat(id: string): Promise<Stat> {
    return this.request(`/stat/${id}`);
  }
}
