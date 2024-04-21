import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss'
})
export class AccountCardComponent {
  @Input() user!: User
}
