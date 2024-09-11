import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Output() usuarioCreado = new EventEmitter<IUser>()

  newUser : IUser = {
    id : 0,
    name : "",
    username: '',
    phone: '',
    website: ''

  }
  onSubmit() {
    this.usuarioCreado.emit(this.newUser);
    this.newUser = {
      id: 0,
      name: '',
      username: '',
      phone: '',
      website: ''
    };
}
}