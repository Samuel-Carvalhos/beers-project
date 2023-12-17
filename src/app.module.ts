import { Module } from '@nestjs/common';
import { beersController } from './modules/beers/controllers/beers.controller';
import { BeersService } from './modules/beers/services/beers.service';

@Module({
  imports: [],
  controllers: [beersController],
  providers: [BeersService],
})
export class BeersModule {}
