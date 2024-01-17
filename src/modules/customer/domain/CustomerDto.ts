import { v4 as uuidv4 } from 'uuid';
import { ICustomerEntity } from './CustomerEntity';
import { ICustomerRegistrationEntity } from './CustomerRegistrationEntity';
import { ICustomerRegistrationDto } from './CustomerRegistrationDto';

export interface ICustomerDto {
  id: string;
  formal_title: string;
  name: string;
  last_name: string;
  phone: string;
  mobile_phone: string;
  email: string;
  state: string;
  city: string;
}

export class CustomerDto implements ICustomerDto {
  id: string;

  formal_title: string;

  name: string;

  last_name: string;

  phone: string;

  mobile_phone: string;

  email: string;

  state: string;

  city: string;

  constructor() {
    this.id = '';
    this.formal_title = '';
    this.name = '';
    this.last_name = '';
    this.phone = '';
    this.mobile_phone = '';
    this.email = '';
    this.state = '';
    this.city = '';
  }

  fromCustomerEntity(customer: ICustomerEntity): this {
    this.id = customer.id;
    this.formal_title = customer.formalTitle;
    this.name = customer.name;
    this.last_name = customer.lastName;
    this.phone = customer.phone;
    this.mobile_phone = customer.mobilePhone;
    this.email = customer.email;
    this.state = customer.state;
    this.city = customer.city;

    return this;
  }

  fromCustomerRegistrationEntity(customerRegistrationEntity: ICustomerRegistrationEntity): this {
    this.id = uuidv4();
    this.formal_title = '';
    this.name = customerRegistrationEntity.name;
    this.last_name = customerRegistrationEntity.lastName;
    this.phone = '';
    this.mobile_phone = '';
    this.email = customerRegistrationEntity.email;
    this.state = '';
    this.city = '';

    return this;
  }

  fromCustomerRegistrationDto(customerRegistrationDto: ICustomerRegistrationDto): this {
    this.id = uuidv4();
    this.formal_title = '';
    this.name = customerRegistrationDto.name;
    this.last_name = customerRegistrationDto.last_name;
    this.phone = '';
    this.mobile_phone = '';
    this.email = customerRegistrationDto.email;
    this.state = '';
    this.city = '';

    return this;
  }
}
