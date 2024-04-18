import { Injectable } from '@angular/core';
import { User } from '../models/classes/user.class';

@Injectable({
  providedIn: 'root'
})
export class AppService {
userList!: User[]
  constructor() { }


}
