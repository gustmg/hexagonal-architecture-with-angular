import { ICustomerDto } from '../../domain/CustomerDto';
import { ICustomerLogin } from '../../domain/CustomerLoginEntity';
import { CustomerRepository } from '../../domain/CustomerRepository';

export default async function login(customerRepository: CustomerRepository, form: ICustomerLogin)
: Promise<ICustomerDto> {
  return customerRepository.login(form);
}
