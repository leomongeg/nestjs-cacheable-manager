import { Injectable } from '@nestjs/common';
import { CacheableModuleOptions, CacheOptionsFactory } from '../../../../lib';

@Injectable()
export class CacheConfig implements CacheOptionsFactory {
  createCacheOptions(): CacheableModuleOptions {
    const ttl = 100;

    return { ttl };
  }
}
