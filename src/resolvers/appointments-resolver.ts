import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

import { randomUUID } from "node:crypto";
import { db } from "../database/in-memory.db";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return db.findAllAppointments();
  }

  @Query(() => [Appointment])
  async customerAppointments(
    @Arg("customerId", () => String) id: string,
  ): Promise<Appointment[] | undefined> {
    return db.findAppointmentsByCustomerId(id);
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg("data", () => CreateAppointmentInput) data: CreateAppointmentInput,
  ): Promise<Appointment> {
    const customerExists = db.findCustomerById(data.customerId);
    if (!customerExists) {
      throw new Error(`Customer with id ${data.customerId} not found`);
    }

    const appointment: Appointment = {
      id: randomUUID(),
      startsAt: data.startsAt,
      endsAt: data.endsAt,
      customerId: data.customerId,
    };

    return db.addAppointment(appointment);
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment): Promise<Customer> {
    const customer = db.findCustomerById(appointment.customerId);

    if (!customer) {
      throw new Error(`Customer with id ${appointment.customerId} not found`);
    }

    return customer;
  }
}
