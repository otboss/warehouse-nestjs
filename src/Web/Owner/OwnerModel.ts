import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OwnerModel {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  passportNumber: string;

  @Field(type => String)
  firstName?: string;

  @Field(type => String)
  middleName: Date;

  @Field(type => String)
  lastName: string;

  @Field(type => String)
  address: string;

  @Field(type => Boolean)
  isMale: boolean;

  @Field(type => String)
  timestamp: string;
}