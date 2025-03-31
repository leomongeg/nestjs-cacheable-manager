<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

## Description

[nestjs-cacheable-manager](https://www.npmjs.com/package/@leomongeg/nestjs-cacheable-manager) module for [Nest](https://github.com/nestjs/nest)
is a high performance layer 1 / layer 2 caching engine that is focused on distributed caching based on [cacheable](https://www.npmjs.com/package/cacheable)

This package was created using as base the [@nestjs/cache-manager](https://github.com/nestjs/cache-manager), since 
@nestjs/cache-manager uses [cache-manager](https://www.npmjs.com/package/cache-manager) and doesn't support the 
[cacheable](https://www.npmjs.com/package/cacheable) layer 1 / layer 2 caching engine.

This package removed the [cache-manager](https://www.npmjs.com/package/cache-manager) and uses directly the [cacheable](https://www.npmjs.com/package/cacheable)
instead to support layer 1 / layer 2 caches.

The interfaces and usage are the same as @nestjs/cache-manager it works the same but using directly [cacheable](https://www.npmjs.com/package/cacheable) 

## Installation

```bash
$ npm i --save @leomongeg/nestjs-cacheable-manager cacheable
```

## Quick Start

[Overview & Tutorial](https://docs.nestjs.com/techniques/caching)

## Usage

```typescript
import { CacheableModule } from '@leomongeg/nestjs-cacheable-manager';
import { CacheableMemory } from 'cacheable';
import KeyvRedis from '@keyv/redis';
import { Keyv } from 'keyv';

@Module({
  imports: [
    CacheableModule.registerAsync({
      useFactory: async () => {
        return {
          primary: new Keyv({ store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }) }),
          secondary: new KeyvRedis('redis://localhost:6379')
        }
      }
    }),
  ],
  controllers: [MyController],
})
export class MyModuleModule {}

```

```typescript
import { Cacheable } from 'cacheable';
import { CACHEABLE_MANAGER } from '@leomongeg/nestjs-cacheable-manager';

@Injectable()
export class MyProvider {
  constructor(
    @Inject(CACHEABLE_MANAGER) private readonly cache: Cacheable,
  ) {}
  
  async getSomething(request: RequestDto){
    const val = await this.cache.get('key');
  }

  async storeSomething(request: RequestDto){
    await this.cache.set('key', request.userId);
  }
  
  async deleteSomething(request:RequestDto){
      await this.cache.delete('key');
  }
}

```

For more details about cache layer 1 and layer 2 please reach out the [cacheable](https://www.npmjs.com/package/cacheable) documentation.

## Support

Nest is an MIT-licensed open source project.

## Stay in touch

- Author - [Leonardo Monge García](https://github.com/leomongeg)

This package is based on [Kamil Myśliwiec](https://twitter.com/kammysliwiec) [@nestjs/cache-manager](https://www.npmjs.com/package/@nestjs/cache-manager)

## License

Nest is [MIT licensed](LICENSE).
