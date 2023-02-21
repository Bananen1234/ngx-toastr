import { NgModule } from '@angular/core/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {ToastContainerModule, ToastrModule} from 'ngx-toastr';
import { ExemplifyModule } from 'angular-exemplify/lib/exemplify.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      closeButton: true,
      disableTimeOut: false,
      progressBar: true,
      toastClass: 'toast',
      positionClass: 'toast-bottom-right',
      enableHtml: true
    }),
    ToastContainerModule,
    ExemplifyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
