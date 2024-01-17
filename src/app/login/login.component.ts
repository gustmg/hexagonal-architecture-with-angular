import { Component, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import {
  CustomerEntity,
  ICustomerEntity,
} from '../../modules/customer/domain/CustomerEntity';
import login from '../../modules/customer/application/login/login';
import createLocalStorageCustomerRepository from '../../modules/customer/infrastructure/LocalStorageCustomerRepository';

const repository = createLocalStorageCustomerRepository();

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  customer = signal<ICustomerEntity>(new CustomerEntity());
  customerLoginForm = {
    email: '',
    password: '',
  };

  async login() {
    try {
      const customer = await login(repository, this.customerLoginForm);
      this.customer.set(new CustomerEntity().fromCustomerDto(customer));

      console.log('Inicio de sesión realizado con éxito 🎉');
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(`Ocurrió un error al iniciar sesión: ${error}`);
    }
  }
}
