import { Customer } from "../dtos/models/customer-model";
import { Appointment } from "../dtos/models/appointment-model";

class InMemoryDatabase {
  public customers: Customer[] = [{ id: "1", name: "John Doe" }];

  public appointments: Appointment[] = [];

  findCustomerById(id: string): Customer | undefined {
    return this.customers.find((c) => c.id === id);
  }

  addCustomer(customer: Customer): Customer {
    this.customers.push(customer);
    return customer;
  }

  findAllAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment): Appointment {
    this.appointments.push(appointment);
    return appointment;
  }
}

export const db = new InMemoryDatabase();
