import { Injectable } from '@angular/core';
import { User } from '../models/classes/user.class';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _userUrl: string = "assets/json/users.json"
  
  constructor(public httpService: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(this._userUrl)
  }

  // CREER UNE METHODE POUR RECUPERER UN USER PAR SON ID :
  getUserById(userId: number): Observable<User> {
    const foundUser = this.getAllUsers()
    .pipe(map(users => users.filter(user => user.id === userId)[0]))
    return foundUser
    }


  }


