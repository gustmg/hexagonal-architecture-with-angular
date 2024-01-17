import { ICustomerDto } from '../../domain/CustomerDto';
import { CustomerRepository } from '../../domain/CustomerRepository';

export default async function updateCustomer(
  customerRepository: CustomerRepository,
  customer: ICustomerDto,
): Promise<void> {
  await customerRepository.update(customer);
}
