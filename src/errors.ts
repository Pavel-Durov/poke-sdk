export class PokeApiError extends Error {
  readonly code?: string;
  constructor(message: string, code?: string) {
    super(message);
    this.name = 'NetworkError';
    this.code = code;
  }
}
