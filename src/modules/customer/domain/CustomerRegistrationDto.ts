import { ICustomerDto } from './CustomerDto';
import { ICustomerRegistrationEntity } from './CustomerRegistrationEntity';

export interface ICustomerRegistrationDto extends Pick<ICustomerDto, 'name' | 'last_name' | 'email'>{
  password: string;
}

export class CustomerRegistrationDto implements ICustomerRegistrationDto {
  name: string;

  last_name: string;

  email: string;

  password: string;

  constructor() {
    this.name = '';
    this.last_name = '';
    this.email = '';
    this.password = '';
  }

  fromCustomerRegistrationEntity(customerRegistrationEntity: ICustomerRegistrationEntity): this {
    this.name = customerRegistrationEntity.name;
    this.last_name = customerRegistrationEntity.lastName;
    this.email = customerRegistrationEntity.email;
    this.password = customerRegistrationEntity.password;

    return this;
  }
}
