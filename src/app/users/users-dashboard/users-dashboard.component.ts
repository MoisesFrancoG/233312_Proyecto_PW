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

  addUser(newUser:IUser) {
    let newID = 0
    if (this.users_list.length > 0) {
      let idList = this.users_list.map(user => user.id)
      console.log("Lista de id: " + idList)
      newID = Math.max(...idList) + 1
      console.log("Id creado : " + newID)
    } 
    newUser.id = newID
    this.users_list.push(newUser)
    console.log(newUser)
  }
}
