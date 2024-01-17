import { CustomerRegistrationDto } from '../../domain/CustomerRegistrationDto';
import { CustomerRepository } from '../../domain/CustomerRepository';

export default async function register(
  customerRepository: CustomerRepository,
  customer: CustomerRegistrationDto,
)
: Promise<void> {
  await customerRepository.register(customer);
}
