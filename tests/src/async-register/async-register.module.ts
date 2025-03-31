import { Module } from '@nestjs/common';
import { CacheableModule } from '../../../lib';
import { AsyncRegisterController } from './async-register.controller';
import { CacheConfig } from './config/cache.config';

@Module({
  imports: [
    CacheableModule.registerAsync({
      isGlobal: true,
      useClass: CacheConfig,
    }),
  ],
  controllers: [AsyncRegisterController],
})
export class AsyncRegisterModule {}
