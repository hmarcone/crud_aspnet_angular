import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule//,
    //BrowserAnimationsModule,
  //   ToastrModule.forRoot({
  //     timeOut: 3000,
  //     preventDuplicates: true,
  //     progressBar: true
  //  }),    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
