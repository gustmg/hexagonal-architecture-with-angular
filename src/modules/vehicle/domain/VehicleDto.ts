import { IVehicleEntity } from './VehicleEntity';

export interface IVehicleDto {
  id: string;
  model: string;
  color: string;
  year: number;
  kilometers: number;
  price: number;
  img: string;
}

export class VehicleDto implements IVehicleDto {
  id: string;

  model: string;

  color: string;

  year: number;

  kilometers: number;

  price: number;

  img: string;

  constructor() {
    this.id = '';
    this.model = '';
    this.color = '';
    this.year = 0;
    this.kilometers = 0;
    this.price = 0;
    this.img = '';
  }

  fromVehicleEntity(vehicle: IVehicleEntity): IVehicleDto {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.color = vehicle.color;
    this.year = vehicle.year;
    this.kilometers = vehicle.mileage;
    this.price = vehicle.price;
    this.img = vehicle.img;

    return this;
  }
}
