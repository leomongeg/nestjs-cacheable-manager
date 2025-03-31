import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { CACHEABLE_TTL_METADATA } from '../cache.constants';

/**
 * Decorator that sets the cache ttl setting the duration for cache expiration.
 *
 * For example: `@CacheTTL(5)`
 *
 * @param ttl number set the cache expiration time
 *
 * @see [Caching](https://docs.nestjs.com/techniques/caching)
 *
 * @publicApi
 */
type CacheableTTLFactory = (ctx: ExecutionContext) => Promise<number> | number;
export const CacheableTTL = (ttl: number | CacheableTTLFactory) =>
  SetMetadata(CACHEABLE_TTL_METADATA, ttl);
