import { Component } from '@angular/core';
import { AppService } from '../../../shared/app.service';
import { User } from '../../../models/classes/user.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  userList!: User[]

  constructor(private appService: AppService){}

  ngOnInit() {
this.appService.getAllUsers().subscribe((data) => {this.userList = data})
  }
}
