import { Module } from '@nestjs/common';
import { CacheableModule } from '../../../lib';
import { DefaultTtlController } from './default-ttl.controller';

@Module({
  imports: [CacheableModule.register()],
  controllers: [DefaultTtlController],
})
export class DefaultTtlModule {}
