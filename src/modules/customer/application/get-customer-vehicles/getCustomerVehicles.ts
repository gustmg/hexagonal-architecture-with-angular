import { IVehicleDto } from 'src/modules/vehicle/domain/VehicleDto';
import { CustomerRepository } from '../../domain/CustomerRepository';

export default function getCustomerVehicles(customerRepository: CustomerRepository)
: Map<string, IVehicleDto> {
  return customerRepository.getCustomerVehicles();
}
