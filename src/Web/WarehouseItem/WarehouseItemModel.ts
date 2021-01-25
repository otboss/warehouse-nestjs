import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { OwnerModel } from '../Owner/OwnerModel';

@ObjectType()
export class WarehouseItemModel {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  itemName: string;

  @Field(type => OwnerModel)
  owner: string;

  @Field(type => Float)
  price: number

  @Field(type => Boolean)
  forSale: boolean

  @Field(type => Boolean)
  forAuction: boolean

  @Field(type => [String])
  timestmap: number;
}