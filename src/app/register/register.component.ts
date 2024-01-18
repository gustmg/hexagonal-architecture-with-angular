import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import register from '../../modules/customer/application/register/register';
import { CustomerRegistrationDto } from '../../modules/customer/domain/CustomerRegistrationDto';
import createLocalStorageCustomerRepository from '../../modules/customer/infrastructure/LocalStorageCustomerRepository';
import { ICustomerRegistrationEntity } from '../../modules/customer/domain/CustomerRegistrationEntity';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

const repository = createLocalStorageCustomerRepository();

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  customerRegistrationForm: ICustomerRegistrationEntity = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  async register() {
    try {
      const payload =
        new CustomerRegistrationDto().fromCustomerRegistrationEntity(
          this.customerRegistrationForm
        );

      await register(repository, payload);

      console.log(
        '%c ¡Registro realizado correctamente! 🎉',
        'background: #CCFFCC; color: black; padding: 10px;'
      );

      this.router.navigate(['/']);
    } catch (error) {
      console.log(
        `%c ❌ Ocurrió un error al registrar cliente: ${error}`,
        'background: #FF8B8B; color: black; padding: 10px;'
      );
    }
  }
}
