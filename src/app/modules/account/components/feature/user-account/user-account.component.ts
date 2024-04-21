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

  userId!: number
  user!: User

  constructor(private appService: AppService, private route: ActivatedRoute){}

  ngOnInit(): void {
    //this.getUserById()


    // ECOUTER LE CHANGEMENT DE PARAM DE LA ROUTE
    // this.route.params.subscribe(param => {
    //   const userID = param['id']
    // })


    // CREER UN OBSERVABLE SUR LE CHANGEMENT DE ROUTE
    // PUIS RELANCER LE FILTRE POUR RECUPERER L'UTILISATEUR VOULU
    this.route.params.pipe(
      switchMap(params => {
        const userId = parseInt(params['id']);
        return this.appService.getUserById(userId);
      })
    ).subscribe(user => {
      this.user = user;
      console.log(this.user);
    })
  }
  // METHODE POUR FILTRER PAR ID MAIS PBLM PAS DE MISE A JOUR AU CLIC
  // getUserById(): void {
  //   this.appService.getAllUsers().subscribe((data)=> {
  //     this.user = data.filter((el) => (el.id == this.userId))[0]
  //     console.log(this.user)
  //   })
  // }
}
