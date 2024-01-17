import { IVehicleDto } from '../../domain/VehicleDto';
import { VehicleRepository } from '../../domain/VehicleRepository';

export default async function getAll(vehicleRepository: VehicleRepository)
: Promise<IVehicleDto[]> {
  return vehicleRepository.getAll();
}
