import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Data extends Document {
  @Prop()
  name: string;

  @Prop()
  updated_at: Date;

  @Prop()
  prices: number[];

  @Prop()
  rate: number
  @Prop()
  category: string
}

export const DataSchema = SchemaFactory.createForClass(Data);