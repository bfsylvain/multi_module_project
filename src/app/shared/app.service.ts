import { Injectable } from '@angular/core';
import { User } from '../models/classes/user.class';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  constructor(public httpService: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>("assets/json/users.json")
  }

  // CREER UNE METHODE POUR RECUPERER UN USER PAR SON ID :
  getUserById(userId: number): Observable<User> {
    const foundUser = this.getAllUsers()
    .pipe(map(users => users.filter(user => user.id === userId)[0]))
    return foundUser
    }


  }


