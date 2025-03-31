import { SetMetadata } from '@nestjs/common';
import { CACHEABLE_KEY_METADATA } from '../cache.constants';

/**
 * Decorator that sets the caching key used to store/retrieve cached items for
 * Web sockets or Microservice based apps.
 *
 * For example:
 * `@CacheKey('events')`
 *
 * @param key string naming the field to be used as a cache key
 *
 * @see [Caching](https://docs.nestjs.com/techniques/caching)
 *
 * @publicApi
 */
export const CacheableKey = (key: string) =>
  SetMetadata(CACHEABLE_KEY_METADATA, key);
