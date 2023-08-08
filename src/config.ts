export class Config {
  readonly Version: string;
  readonly BaseUrl: string;
  readonly UserAgent: string;

  constructor(version: string, baseUrl: string) {
    this.Version = version;
    this.BaseUrl = baseUrl;
    this.UserAgent = `poke-sdk-typescript/typescript:${version}`;
  }
}
