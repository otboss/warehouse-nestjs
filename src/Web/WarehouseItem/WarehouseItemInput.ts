import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length } from 'class-validator';

@InputType()
export class WarehouseItemInput {
  @Field()
  @Length(5, 20)
  itemName: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(1, 20)
  price?: number;

  @Field({ nullable: true })
  @IsOptional()
  @Length(4, 5)
  forSale?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @Length(4, 5)
  forAuction?: boolean;
}