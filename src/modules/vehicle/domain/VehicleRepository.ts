import { IVehicleDto } from './VehicleDto';

export interface VehicleRepository {
  getAll(): Promise<IVehicleDto[]>;
}
