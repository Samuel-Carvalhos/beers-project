import { Controller, Get } from '@nestjs/common';
import { BeersService } from '../services/beers.service';

@Controller()
export class beersController {
  constructor(private readonly beersService: BeersService) {}

  @Get()
  getHello(): string {
    return this.beersService.getHello();
  }
}
