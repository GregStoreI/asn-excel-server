import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data } from './data.model';

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<Data>) {}

  // async createData(data: any[]): Promise<Data[]> {
  //    return await this.dataModel.insertMany(data);
  // }
}