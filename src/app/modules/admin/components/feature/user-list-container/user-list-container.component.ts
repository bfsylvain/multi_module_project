import { Component } from '@angular/core';
import { AppService } from '../../../../../shared/app.service';
import { User } from '../../../../../models/classes/user.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrl: './user-list-container.component.scss',
})
export class UserListContainerComponent {
  userList!: User[];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.appService.getAllUsers().subscribe((data) => {
      this.userList = data;
    });
  }
}
