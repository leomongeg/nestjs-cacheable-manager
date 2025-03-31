import { Provider } from '@nestjs/common';
import { Cacheable } from 'cacheable';
import { CACHEABLE_MANAGER } from './cache.constants';
import { MODULE_OPTIONS_TOKEN } from './cache.module-definition';
import { CacheableManagerOptions } from './interfaces/cache-manager.interface';

/**
 * Creates a CacheManager Provider.
 *
 * @publicApi
 */
export function createCacheableManager(): Provider {
  return {
    provide: CACHEABLE_MANAGER,
    useFactory: (options: CacheableManagerOptions) => {
      const cacheableManager = new Cacheable(options);
      (cacheableManager as any).onModuleDestroy = async () => {
        await cacheableManager.disconnect();
      };
      return cacheableManager;
    },
    inject: [MODULE_OPTIONS_TOKEN],
  };
}
