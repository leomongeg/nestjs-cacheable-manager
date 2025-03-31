import { ConfigurableModuleBuilder } from '@nestjs/common';
import {
  CacheableModuleOptions,
  CacheOptionsFactory,
} from './interfaces/cache-module.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CacheableModuleOptions>({
    moduleName: 'Cacheable',
  })
    .setFactoryMethodName('createCacheOptions' as keyof CacheOptionsFactory)
    .build();
