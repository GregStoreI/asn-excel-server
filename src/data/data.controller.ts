import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api/data/')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('kraken')
  async getData(): Promise<any> {
    //return this.dataService.createData;
    
  }

}