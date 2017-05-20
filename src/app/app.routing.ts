/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about';
import { AuthGuard } from './_guards';
import { DashboardComponent } from './dashboard';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ProfileComponent } from './profile';
import { RegisterComponent } from './register';
import { FaqComponent } from './faq';
import { SupportComponent } from './support';
import { SubscriptionComponent } from './subscription';
import { QuestionComponent } from './question';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'subscription', component: SubscriptionComponent },
    { path: 'support', component: SupportComponent },

    // protected paths
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'faq', component: FaqComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'question', component: QuestionComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
