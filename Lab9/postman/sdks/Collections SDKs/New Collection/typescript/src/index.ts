import { Environment } from './http/environment';
import { SdkConfig } from './http/types';

export * from './http';
export { Environment } from './http/environment';

export class NewCollectionSdk {
  constructor(public config: SdkConfig) {}

  set baseUrl(baseUrl: string) {}

  set environment(environment: Environment) {}

  set timeoutMs(timeoutMs: number) {}
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
