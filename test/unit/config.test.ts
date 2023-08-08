import { describe, expect, it } from '@jest/globals';

import { Config } from '../../src/config';

describe('Config class', () => {
  it('Expected to have all fields set', () => {
    const cfg = new Config('0.0.1', 'https://example.com');
    expect(cfg.Version).toBe('0.0.1');
    expect(cfg.BaseUrl).toBe('https://example.com');
    expect(cfg.UserAgent).toBe('poke-sdk-typescript/typescript:0.0.1');
  });
});
