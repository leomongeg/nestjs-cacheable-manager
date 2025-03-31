import { ConfigurableModuleAsyncOptions, Provider, Type } from '@nestjs/common';
import { CacheableManagerOptions } from './cache-manager.interface';

export type CacheableOptions<
  StoreConfig extends Record<any, any> = Record<string, any>,
> =
  // Store-specific configuration takes precedence over cache module options due
  // to how `createCacheManager` is implemented.
  CacheableManagerOptions & StoreConfig;

export type CacheableModuleOptions<
  StoreConfig extends Record<any, any> = Record<string, any>,
> = CacheableOptions<StoreConfig> & {
  /**
   * If "true', register `CacheModule` as a global module.
   */
  isGlobal?: boolean;
};

/**
 * Interface describing a `CacheOptionsFactory`.  Providers supplying configuration
 * options for the Cache module must implement this interface.
 *
 * @see [Async configuration](https://docs.nestjs.com/techniques/caching#async-configuration)
 *
 * @publicApi
 */
export interface CacheOptionsFactory<
  StoreConfig extends Record<any, any> = Record<string, any>,
> {
  createCacheOptions():
    | Promise<CacheableOptions<StoreConfig>>
    | CacheableOptions<StoreConfig>;
}

/**
 * Options for dynamically configuring the Cache module.
 *
 * @see [Async configuration](https://docs.nestjs.com/techniques/caching#async-configuration)
 *
 * @publicApi
 */
export interface CacheableModuleAsyncOptions<
  StoreConfig extends Record<any, any> = Record<string, any>,
> extends ConfigurableModuleAsyncOptions<
    CacheableOptions<StoreConfig>,
    keyof CacheOptionsFactory
  > {
  /**
   * Injection token resolving to an existing provider. The provider must implement
   * the `CacheOptionsFactory` interface.
   */
  useExisting?: Type<CacheOptionsFactory<StoreConfig>>;
  /**
   * Injection token resolving to a class that will be instantiated as a provider.
   * The class must implement the `CacheOptionsFactory` interface.
   */
  useClass?: Type<CacheOptionsFactory<StoreConfig>>;
  /**
   * Function returning options (or a Promise resolving to options) to configure the
   * cache module.
   */
  useFactory?: (
    ...args: any[]
  ) => Promise<CacheableOptions<StoreConfig>> | CacheableOptions<StoreConfig>;
  /**
   * Dependencies that a Factory may inject.
   */
  inject?: any[];
  /**
   * Extra providers to be registered within a scope of this module.
   */
  extraProviders?: Provider[];
  /**
   * If "true', register `CacheModule` as a global module.
   */
  isGlobal?: boolean;
}
