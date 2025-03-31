import { Module } from '@nestjs/common';
import { CacheableModule } from '../../../lib';
import { AsyncRegisterExtraController } from './async-register-extra.controller';
import { CacheConfig } from './config/cache.config';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    CacheableModule.registerAsync({
      extraProviders: [ConfigService],
      isGlobal: true,
      useClass: CacheConfig,
    }),
  ],
  controllers: [AsyncRegisterExtraController],
})
export class AsyncRegisterExtraModule {}
