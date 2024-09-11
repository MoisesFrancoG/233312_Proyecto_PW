import { Component } from '@angular/core';
import { IUser } from '../modelo/iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users_list: IUser[] = []

  constructor(private _service: UserService){
    this._service.getAll().subscribe(response => this.users_list = response)
  }
}
