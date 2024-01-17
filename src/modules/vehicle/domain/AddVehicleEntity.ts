import { IAddVehicleDto } from './AddVehicleDto';

export interface IAddVehicleEntity {
  vehicleId: string;
  acceptPrivacy: boolean;
  acceptTerms: boolean;
}

export class AddVehicleEntity implements IAddVehicleEntity {
  vehicleId: string;

  acceptPrivacy: boolean;

  acceptTerms: boolean;

  constructor() {
    this.vehicleId = '';
    this.acceptPrivacy = false;
    this.acceptTerms = false;
  }

  fromAddVehicleDto(addVehicle: IAddVehicleDto): IAddVehicleEntity {
    this.vehicleId = addVehicle.vehicle_id;
    this.acceptPrivacy = addVehicle.accept_privacy;
    this.acceptTerms = addVehicle.accept_terms;

    return this;
  }
}
