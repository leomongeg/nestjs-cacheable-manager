import { Injectable } from '@nestjs/common';
import { CacheableModuleOptions, CacheOptionsFactory } from '../../../../lib';
import { ConfigService } from './config.service';

@Injectable()
export class CacheConfig implements CacheOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createCacheOptions(): CacheableModuleOptions {
    const ttl = this.configService.getTtl();

    return { ttl };
  }
}
