import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';
import { AppService } from '../../../../../shared/app.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss'
})
export class UserAccountComponent {

  user!: User

  constructor(private appService: AppService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const userId = parseInt(params['id'])
      this.appService.getUserById(userId)
      .subscribe(user => {
        this.user = user
      })
    })

    // METHODE SWITCHMAP ?????
    // CREER UN OBSERVABLE SUR LE CHANGEMENT DE ROUTE
    // PUIS LANCER LE FILTRE POUR RECUPERER L'UTILISATEUR VOULU
    // this.route.params.pipe(
    //   switchMap(params => {
    //     const userId = parseInt(params['id']);
    //     return this.appService.getUserById(userId);
    //   })
    // ).subscribe(user => {
    //   this.user = user;
    //   console.log(this.user);
    // })
  }

}
