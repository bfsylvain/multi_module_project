import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { UserAccountComponent } from './components/feature/user-account/user-account.component';

const routes: Routes = [
  {
    path: 'users', 
    component: AccountHomeComponent,
    children: [
      {
        path: 'user/:id',
        component: UserAccountComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
