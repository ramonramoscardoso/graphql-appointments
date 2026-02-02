import { Field, ID, ObjectType } from "type-graphql";
import { Customer } from "./customer-model";

@ObjectType()
export class Appointment {
  @Field(() => String)
  id: string;

  @Field(() => Date)
  startsAt: Date;

  @Field(() => Date)
  endsAt: Date;

  @Field(() => ID)
  customerId: string;

  @Field(() => Customer)
  customer?: Customer;
}
