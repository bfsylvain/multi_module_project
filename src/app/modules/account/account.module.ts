import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { UserAccountComponent } from './components/feature/user-account/user-account.component';
import { AccountCardComponent } from './components/ui/account-card/account-card.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    UserAccountComponent,
    AccountCardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
