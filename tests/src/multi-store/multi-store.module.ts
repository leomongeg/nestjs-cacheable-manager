import { Module } from '@nestjs/common';
import { CacheableModule } from '../../../lib';
import { MultiStoreController } from './multi-store.controller';
import KeyvRedis from '@keyv/redis';
import { Keyv } from 'keyv';
import { CacheableMemory } from 'cacheable';

@Module({
  imports: [
    CacheableModule.registerAsync({
      useFactory: async () => {
        return {
          primary: new Keyv({ store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }) }),
          secondary:new KeyvRedis('redis://localhost:6379')
        }
      }
    }),
  ],
  controllers: [MultiStoreController],
})
export class MultiStoreModule {}
