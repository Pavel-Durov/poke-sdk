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

  async getPokemon(id: string): Promise<Pokemon> {
    return this.request(`/pokemon/${id}`);
  }

  async getNature(id: string): Promise<Nature> {
    return this.request(`/nature/${id}`);
  }
  async getStat(id: string): Promise<Stat> {
    return this.request(`/stat/${id}`);
  }
}
