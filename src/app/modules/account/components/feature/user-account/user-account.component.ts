import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';
import { AppService } from '../../../../../shared/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss'
})
export class UserAccountComponent {

  userList!: User[]
  userId!: number
  user!: User

  constructor(private appService: AppService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getUserById()

    this.userId = parseInt(this.route.snapshot.params['id'])
  }

  getUserById(): void {
    this.appService.getAllUsers().subscribe((data)=> {
      this.user = data.filter((el) => (el.id == this.userId))[0]
      console.log(this.user)
    })
  }
}
