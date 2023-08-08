import { describe, expect, it } from '@jest/globals';
import SDK from '../../src';

describe('Poke class', () => {
  const poke = new SDK().Poke;

  describe('getPokemon', () => {
    it('expected to get valid response for id 1', async () => {
      const pokemon = await poke.getPokemon('1');
      expect(pokemon.abilities).toEqual([
        {
          ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
          is_hidden: false,
          slot: 1
        },
        {
          ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' },
          is_hidden: true,
          slot: 3
        }
      ]);
      expect(pokemon.base_experience).toEqual(64);
      expect(pokemon.forms).toEqual([{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' }]);
      expect(pokemon.height).toEqual(7);
      expect(pokemon.held_items).toEqual([]);
      expect(pokemon.id).toEqual(1);
      expect(pokemon.is_default).toEqual(true);
      expect(pokemon.location_area_encounters).toEqual('https://pokeapi.co/api/v2/pokemon/1/encounters');
      expect(pokemon.name).toEqual('bulbasaur');
      expect(pokemon.order).toEqual(1);
      expect(pokemon.past_types).toEqual([]);
      expect(pokemon.species).toEqual({ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' });
      expect(pokemon.stats).toEqual([
        { base_stat: 45, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
        { base_stat: 49, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
        { base_stat: 49, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
        { base_stat: 65, effort: 1, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
        { base_stat: 65, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
        { base_stat: 45, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }
      ]);
      expect(pokemon.types).toEqual([
        { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
        { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } }
      ]);
      expect(pokemon.weight).toEqual(69);
    });
    it('expected to get same result for id and for name params', async () => {
      expect(await poke.getPokemon('1')).toEqual(await poke.getPokemon('bulbasaur'));
    });
    it('expected to get HTTP 404 error for invalid pokemon name', async () => {
      try {
        await poke.getPokemon('pavelchu');
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 404');
      }
    });
    it('expected to get HTTP 404 error for invalid pokemon id', async () => {
      try {
        await poke.getPokemon('-1');
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 404');
      }
    });
  });

  describe('getNature', () => {
    it('expected to get valid response for id 1', async () => {
      const nature = await poke.getNature('1');
      expect(nature.decreased_stat).toEqual(null);
      expect(nature.hates_flavor).toEqual(null);
      expect(nature.name).toEqual('hardy');
      // TODO: assert all fields
    });
    it('expected to get same result for id and for name params', async () => {
      expect(await poke.getNature('1')).toEqual(await poke.getNature('hardy'));
    });
    it('expected to get HTTP 404 error for invalid nature id', async () => {
      try {
        await poke.getNature('-1');
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 404');
      }
    });
  });

  describe('getStat', () => {
    it('expected to get valid response for id 1', async () => {
      const stat = await poke.getStat('1');
      expect(stat.id).toEqual(1);
      expect(stat.name).toEqual('hp');
      // TODO: assert all fields
    });
    it('expected to get same result for id and for name params', async () => {
      expect(await poke.getStat('1')).toEqual(await poke.getStat('hp'));
    });
    it('expected to get HTTP 404 error for invalid nature id', async () => {
      try {
        await poke.getStat('1234');
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 404');
      }
    });
  });
});
