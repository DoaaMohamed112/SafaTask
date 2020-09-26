import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RegisterationComponent } from './registeration/registeration.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { VerifyFormComponent } from './components/verify-form/verify-form.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    RegisterFormComponent,
    VerifyFormComponent,
    SubmitFormComponent,
    UploadFormComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatStepperModule, 
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
