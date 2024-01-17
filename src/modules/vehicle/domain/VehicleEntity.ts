import { IVehicleDto } from './VehicleDto';

export interface IVehicleEntity{
  id: string;
  model: string;
  color: string;
  year: number;
  mileage: number;
  price: number;
  img: string;
}

export class VehicleEntity implements IVehicleEntity {
  id: string;

  model: string;

  color: string;

  year: number;

  mileage: number;

  price: number;

  img: string;

  constructor() {
    this.id = '';
    this.model = '';
    this.color = '';
    this.year = 0;
    this.mileage = 0;
    this.price = 0;
    this.img = '';
  }

  fromVehicleDto(vehicle: IVehicleDto): IVehicleEntity {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.color = vehicle.color;
    this.year = vehicle.year;
    this.mileage = vehicle.kilometers;
    this.price = vehicle.price;
    this.img = vehicle.img;

    return this;
  }
}
