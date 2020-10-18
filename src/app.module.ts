import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import env from '@env';

import { CoreModule } from '@core/core.module';
import { AppController } from './app.controller';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { BaseRdbmsService } from '@core/services/base-rdbms/base-rdbms.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
    }),
    CoreModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    BaseRdbmsService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('');
  }
}
