import { IVehicleDto } from "../../../vehicle/domain/VehicleDto";
import { CustomerRepository } from "../../domain/CustomerRepository";

export default async function addVehicle(
  customerRepository: CustomerRepository,
  vehicle: IVehicleDto
): Promise<void> {
  return customerRepository.addVehicle(vehicle);
}
