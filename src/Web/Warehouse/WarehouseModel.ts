import { Field, ID, ObjectType } from '@nestjs/graphql';
import { WarehouseLot } from '../WarehouseLot/WarehouseLot';
import { WarehouseLotModel } from '../WarehouseLot/WarehouseLotModel';

@ObjectType()
export class WarehouseModel {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  address: string;

  @Field(type => [WarehouseLotModel])
  lots: WarehouseLot[];
}