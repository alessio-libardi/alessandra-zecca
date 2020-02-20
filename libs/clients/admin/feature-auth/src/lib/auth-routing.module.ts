import { SharedModule } from '@alessandra-zecca/clients/admin/feature-shared';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: 'logout',
        pathMatch: 'full',
        component: LogoutComponent,
      },
      {
        path: 'password-recovery',
        pathMatch: 'full',
        component: PasswordRecoveryComponent,
      },
      {
        path: 'register',
        pathMatch: 'full',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AuthComponent, LoginComponent, LogoutComponent, PasswordRecoveryComponent, RegisterComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
