import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class WarehouseLotModel {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  warehouseId: string;

  @Field(type => Float)
  size: number;
}