import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
}
