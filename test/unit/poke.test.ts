import axios from 'axios';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { Config } from '../../src/config';
import { Poke } from '../../src/poke';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Poke class', () => {
  const cfg = new Config('0.0.1', 'https://example.com');
  const poke = new Poke(cfg);
  const expectedHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'poke-sdk-typescript/typescript:0.0.1'
  };

  describe('getPokemon', () => {
    it('expected to have correct request params', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - mocked type error
      axios.get.mockResolvedValueOnce('1');
      await poke.getPokemon('1');
      expect(axios.get).toHaveBeenCalledWith('https://example.com/pokemon/1', {
        headers: expectedHeaders
      });
    });

    it('expected to return error on network error', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - mocked type error
      axios.get.mockRejectedValueOnce(new Error('Network error!'));
      try {
        await poke.getPokemon('1');
      } catch (e) {
        expect(e.message).toMatch('Network error!');
      }
    });
  });

  describe('getStat', () => {
    it('expected getStat to set correct request params', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - mocked type error
      axios.get.mockResolvedValueOnce('1');
      await poke.getStat('1');
      expect(axios.get).toHaveBeenCalledWith('https://example.com/stat/1', {
        headers: expectedHeaders
      });
    });
    it('expected to return error on network error', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - mocked type error
      axios.get.mockRejectedValueOnce(new Error('Network error!'));
      try {
        await poke.getStat('2');
      } catch (e) {
        expect(e.message).toMatch('Network error!');
      }
    });
  });

  describe('getNature', () => {
    it('expected getNature to set correct request params', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - mocked type error
      axios.get.mockResolvedValueOnce('3');
      await poke.getNature('3');
      expect(axios.get).toHaveBeenCalledWith('https://example.com/nature/3', {
        headers: expectedHeaders
      });
    });
    it('expected to return error on network error', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - mocked type error
      axios.get.mockRejectedValueOnce(new Error('Network error!'));
      try {
        await poke.getNature('3');
      } catch (e) {
        expect(e.message).toMatch('Network error!');
      }
    });
  });
});
