import { Injectable } from '@angular/core';
import { User } from '../models/classes/user.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  constructor(public httpService: HttpClient) { }

  // est il possible de plutot de definir l'observable comme une valeur du service
  // plutot qu'une methode du service ? (voir ci-dessous)

  // listTotal!: Observable<User[]>
  
  ngOnInit(){
    // this.stockUsersAsOservable()
  }

  getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>("assets/json/users.json")
  }

  // stockUsersAsOservable(): void {
  //   this.listTotal = this.httpService.get<User[]>("assets/json/users.json")
  // }
  sayHello() {
    console.log("hello")
  }
}
