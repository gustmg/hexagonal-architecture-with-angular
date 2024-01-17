import { v4 as uuidv4 } from 'uuid';
import { IVehicleDto } from '../domain/VehicleDto';
import { VehicleRepository } from '../domain/VehicleRepository';

async function getAll():Promise<IVehicleDto[]> {
  const vehiclesMap = new Map();
  vehiclesMap.set(
    'Audi A4',
    {
      id: uuidv4(),
      model: 'Audi A4',
      color: 'White',
      year: 2019,
      kilometers: 10000,
      price: 1000000,
      img: 'https://mediaservice.audi.com/media/cdb/data/65ab2ef2-dc1e-4c38-bf85-848f139e34c1.jpg',
    },
  );

  const vehiclesList = Array.from(vehiclesMap.values());

  if (!vehiclesMap) {
    return Promise.resolve([]);
  }

  return Promise.resolve(vehiclesList);
}

export default function createLocalStorageVehicleRepository(): VehicleRepository {
  return {
    getAll,
  };
}
