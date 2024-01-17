import { IVehicleDto } from 'src/modules/vehicle/domain/VehicleDto';
import { ICustomerDto } from './CustomerDto';
import { ICustomerLogin } from './CustomerLoginEntity';
import { ICustomerRegistrationDto } from './CustomerRegistrationDto';

export interface CustomerRepository {
  login(form: ICustomerLogin): Promise<ICustomerDto>;
  register(form: ICustomerRegistrationDto): Promise<void>;
  update(customer: ICustomerDto): Promise<void>;
  addVehicle(vehicle: IVehicleDto): Promise<void>;
  getCustomerVehicles(): Map<string, IVehicleDto>;
}
