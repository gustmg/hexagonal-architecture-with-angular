import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private loggedCustomer = signal('');

  setLoggedCustomer(update: string) {
    this.loggedCustomer.set(update);
  }

  getLoggedCustomer() {
    return this.loggedCustomer();
  }
}
