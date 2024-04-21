import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserListContainerComponent } from './components/feature/user-list-container/user-list-container.component';
import { UserCardComponent } from './components/ui/user-card/user-card.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    UserListContainerComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
