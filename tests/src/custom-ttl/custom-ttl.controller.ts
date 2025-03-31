import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheableInterceptor, CacheableTTL } from '../../../lib';

@Controller()
@CacheableTTL(600)
export class CustomTtlController {
  counter = 0;
  constructor() {}

  @Get()
  @CacheableTTL(500)
  @UseInterceptors(CacheableInterceptor)
  getNumber() {
    return this.counter++;
  }

  @Get('/controller')
  @UseInterceptors(CacheableInterceptor)
  getNumberWithControllerTTL() {
    return this.counter++;
  }
}
