import { Component } from '@angular/core';
import { AppService } from '../../../../shared/app.service';
import { User } from '../../../../models/classes/user.class';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrl: './account-home.component.scss',
})
export class AccountHomeComponent {

  userList!: User[];
  
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAllUsers().subscribe((data) => {
      this.userList = data;
    });
  }
}
