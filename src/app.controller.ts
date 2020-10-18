import { BaseRdbmsModel } from '@core/models';
import { BaseRdbmsController } from '@core/models/base-rdbms.controller';
import { BaseRdbmsService } from '@core/services/base-rdbms/base-rdbms.service';
import { Controller } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';

/**
 * App Controller
 */
@Controller('common')
@ApiSecurity('Authorisation') // NOTE: The string must be consistent to the last parameter of the line addApiKey() in main.ts
export class AppController extends BaseRdbmsController {

  constructor(protected service: BaseRdbmsService<BaseRdbmsModel>) {
      super(service);
  }
}
