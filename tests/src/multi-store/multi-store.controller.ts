import { Controller, Get, Inject } from '@nestjs/common';
import { Cache, CACHEABLE_MANAGER } from '../../../lib';

@Controller()
export class MultiStoreController {
  constructor(@Inject(CACHEABLE_MANAGER) private cacheManager: Cache) {}

  @Get()
  async getFromMultiStore(): Promise<unknown> {
    const value = await this.cacheManager.get('multi-store-key');
    if (!value) {
      await this.cacheManager.set('multi-store-key', 'multi-store-value');
    }
    return value;
  }
}
