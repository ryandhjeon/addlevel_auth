import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';

// Components
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { HomeComponent } from './home/index';
import { AboutComponent } from './about/index';
import { DashboardComponent } from './dashboard/index';
import { LoginComponent } from './login/index';
import { ProfileComponent } from './profile/index';
import { FooterComponent } from './footer/index';
import { RegisterComponent } from './register/index';
import { FaqComponent } from './faq/index';
import { ContactComponent } from './contact/contact.component';
import { QuestionComponent } from './question/question.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SupportComponent } from './support/support.component';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        AlertComponent,
        HomeComponent,
        DashboardComponent,
        LoginComponent,
        ProfileComponent,
        FooterComponent,
        RegisterComponent,
        FaqComponent,
        ContactComponent,
        QuestionComponent,
        SubscriptionComponent,
        SupportComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
