import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Customer } from "../dtos/models/customer-model";
import { CreateCustomerInput } from "../dtos/inputs/create-customer-input";
import { db } from "../database/in-memory.db";
import { randomUUID } from "node:crypto";

@Resolver(() => Customer)
export class CustomersResolver {
  @Query(() => [Customer])
  async customers(): Promise<Customer[]> {
    return db.customers;
  }

  @Query(() => Customer, { nullable: true })
  async customer(
    @Arg("id", () => String) id: string,
  ): Promise<Customer | undefined> {
    return db.findCustomerById(id);
  }

  @Mutation(() => Customer)
  async createCustomer(
    @Arg("data", () => CreateCustomerInput) data: CreateCustomerInput,
  ): Promise<Customer> {
    const customer: Customer = {
      id: randomUUID(),
      name: data.name,
    };

    return db.addCustomer(customer);
  }
}
