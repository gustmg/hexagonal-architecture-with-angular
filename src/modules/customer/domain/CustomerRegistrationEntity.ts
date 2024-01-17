import { ICustomerRegistrationDto } from './CustomerRegistrationDto';

export interface ICustomerRegistrationEntity {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export class CustomerRegistrationEntity implements ICustomerRegistrationEntity {
  name: string;

  lastName: string;

  email: string;

  password: string;

  constructor() {
    this.name = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  fromCustomerRegistrationDto(customerRegistrationDto: ICustomerRegistrationDto): this {
    this.name = customerRegistrationDto.name;
    this.lastName = customerRegistrationDto.last_name;
    this.email = customerRegistrationDto.email;
    this.password = customerRegistrationDto.password;

    return this;
  }
}
