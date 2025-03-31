import { Module } from '@nestjs/common';
import { CacheableModule } from '../../../lib';
import { CustomTtlController } from './custom-ttl.controller';

@Module({
  imports: [CacheableModule.register()],
  controllers: [CustomTtlController],
})
export class CustomTtlModule {}
