import { IVehicleDto, VehicleDto } from 'src/modules/vehicle/domain/VehicleDto';
import { ICustomerLogin } from '../domain/CustomerLoginEntity';
import { CustomerRepository } from '../domain/CustomerRepository';
import { CustomerDto, ICustomerDto } from '../domain/CustomerDto';
import { ICustomerRegistrationDto } from '../domain/CustomerRegistrationDto';

function getAllCustomersFromLocalStorage():Map<string, ICustomerDto> {
  const customers = localStorage.getItem('customers');

  if (!customers) {
    return new Map();
  }

  return new Map(JSON.parse(customers) as Iterable<[string, ICustomerDto]>);
}

function getCustomerVehicles():Map<string, IVehicleDto> {
  const vehicles = localStorage.getItem('customer-vehicles');

  if (!vehicles) {
    return new Map();
  }

  return new Map(JSON.parse(vehicles) as Iterable<[string, IVehicleDto]>);
}

async function login(loginForm: ICustomerLogin): Promise<ICustomerDto> {
  const customers = getAllCustomersFromLocalStorage();
  const customer = customers.get(loginForm.email);

  if (!customer) {
    throw new Error('Customer not found');
  }

  return Promise.resolve(customer);
}

function register(registerForm: ICustomerRegistrationDto): Promise<void> {
  const customers = getAllCustomersFromLocalStorage();

  customers.set(
    registerForm.email,
    new CustomerDto().fromCustomerRegistrationDto(registerForm),
  );

  localStorage.setItem('customers', JSON.stringify(Array.from(customers.entries())));

  return Promise.resolve();
}

function update(customer: CustomerDto): Promise<void> {
  const customers = getAllCustomersFromLocalStorage();

  customers.set(customer.email, customer);

  localStorage.setItem('customers', JSON.stringify(Array.from(customers.entries())));

  return Promise.resolve();
}

function addVehicle(vehicle: IVehicleDto): Promise<void> {
  const customerVehicles = getCustomerVehicles();

  customerVehicles.set(
    vehicle.id,
    vehicle,
  );

  localStorage.setItem('customer-vehicles', JSON.stringify(Array.from(customerVehicles.entries())));

  return Promise.resolve();
}

export default function createLocalStorageCustomerRepository(): CustomerRepository {
  return {
    login,
    register,
    update,
    addVehicle,
    getCustomerVehicles,
  };
}
