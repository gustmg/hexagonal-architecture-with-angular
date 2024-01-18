import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import {
  IVehicleDto,
  VehicleDto,
} from '../../modules/vehicle/domain/VehicleDto';
import getAll from '../../modules/vehicle/application/get-all/getAll';
import {
  IVehicleEntity,
  VehicleEntity,
} from '../../modules/vehicle/domain/VehicleEntity';
import createLocalStorageVehicleRepository from '../../modules/vehicle/infrastructure/LocalStorageVehicleRepository';
import addVehicle from '../../modules/customer/application/add-vehicle/addVehicle';
import createLocalStorageCustomerRepository from '../../modules/customer/infrastructure/LocalStorageCustomerRepository';
import getCustomerVehicles from '../../modules/customer/application/get-customer-vehicles/getCustomerVehicles';
import { MatTableModule } from '@angular/material/table';

const repository = createLocalStorageVehicleRepository();
const customerRepository = createLocalStorageCustomerRepository();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    MatSelectModule,
    MatTableModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  vehicles: IVehicleEntity[] = [];
  selectedVehicle: IVehicleEntity = new VehicleEntity();
  customerVehicles: IVehicleEntity[] = [];
  displayedColumns: string[] = ['model', 'year', 'color', 'price'];

  async fetchVehicles() {
    try {
      const vehicles: IVehicleDto[] = await getAll(repository);
      this.vehicles = vehicles.map((vehicleDto) =>
        new VehicleEntity().fromVehicleDto(vehicleDto)
      );
    } catch (error) {
      console.log(`Ocurrió un error al obtener vehículos: ${error}`);
    }
  }

  async addVehicle() {
    try {
      if (this.selectedVehicle.id !== '') {
        const payload = new VehicleDto().fromVehicleEntity(
          this.selectedVehicle
        );
        await addVehicle(customerRepository, payload);

        console.log('Vehículo agregado! 🎉');

        this.fetchCustomerVehicles();
      } else {
        throw new Error('No se ha seleccionado un vehículo para agregar');
      }
    } catch (error) {
      console.log(`Ocurrió un error al agregar vehículo: ${error}`);
    }
  }

  fetchCustomerVehicles() {
    try {
      const vehiclesMap = getCustomerVehicles(customerRepository);
      const vehiclesArray = Array.from(vehiclesMap.values());

      this.customerVehicles = vehiclesArray.map((vehicleDto) =>
        new VehicleEntity().fromVehicleDto(vehicleDto)
      );
    } catch (error) {
      console.log(
        `Ocurrió un error al obtener vehículos del cliente: ${error}`
      );
    }
  }

  async ngOnInit() {
    await this.fetchVehicles();
    this.fetchCustomerVehicles();
  }
}
