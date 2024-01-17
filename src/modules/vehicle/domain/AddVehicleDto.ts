import { IAddVehicleEntity } from './AddVehicleEntity';

export interface IAddVehicleDto{
  vehicle_id: string;
  accept_privacy: boolean;
  accept_terms: boolean;
}

export class AddVehicleDto implements IAddVehicleDto {
  vehicle_id: string;

  accept_privacy: boolean;

  accept_terms: boolean;

  constructor() {
    this.vehicle_id = '';
    this.accept_privacy = false;
    this.accept_terms = false;
  }

  fromAddVehicleEntity(addVehicle: IAddVehicleEntity): IAddVehicleDto {
    this.vehicle_id = addVehicle.vehicleId;
    this.accept_privacy = addVehicle.acceptPrivacy;
    this.accept_terms = addVehicle.acceptTerms;

    return this;
  }
}
