import { v4 as uuidv4 } from 'uuid';
import { ICustomerDto } from './CustomerDto';
import isCustomerNameValid from './CustomerName';
import { ICustomerRegistrationDto } from './CustomerRegistrationDto';

export interface ICustomerEntity {
  id: string;
  formalTitle: string;
  name: string;
  lastName: string;
  phone: string;
  mobilePhone: string;
  email: string;
  state: string;
  city: string;
}

export class CustomerEntity implements ICustomerEntity {
  id: string;

  formalTitle: string;

  name: string;

  lastName: string;

  phone: string;

  mobilePhone: string;

  email: string;

  state: string;

  city: string;

  constructor() {
    this.id = '';
    this.formalTitle = '';
    this.name = '';
    this.lastName = '';
    this.phone = '';
    this.mobilePhone = '';
    this.email = '';
    this.state = '';
    this.city = '';
  }

  fromCustomerDto(customerDto: ICustomerDto): this {
    this.id = customerDto.id;
    this.formalTitle = customerDto.formal_title;
    this.name = customerDto.name;
    this.lastName = customerDto.last_name;
    this.phone = customerDto.phone;
    this.mobilePhone = customerDto.mobile_phone;
    this.email = customerDto.email;
    this.state = customerDto.state;
    this.city = customerDto.city;

    return this;
  }

  fromCustomerRegistrationDto(customerRegistrationDto: ICustomerRegistrationDto): this {
    this.id = uuidv4();
    this.formalTitle = '';
    this.name = customerRegistrationDto.name;
    this.lastName = customerRegistrationDto.last_name;
    this.phone = '';
    this.mobilePhone = '';
    this.email = customerRegistrationDto.email;
    this.state = '';
    this.city = '';

    return this;
  }
}

export function ensureFormIsValid({ name }: ICustomerEntity): void {
  if (!isCustomerNameValid(name)) {
    throw new Error('Invalid customer name');
  }
}

export function isCustomerWithCompleteData(customer: ICustomerEntity): boolean {
  return Object.values(customer).every((value) => value !== '');
}
