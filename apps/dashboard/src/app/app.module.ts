import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LiftsComponent } from './lifts/lifts.component';
import { LiftsListComponent } from './lifts/lifts-list/lifts-list.component';
import { LiftDetailsComponent } from './lifts/lift-details/lift-details.component';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@exercises/material';
import { UiLibraryModule } from '@exercises/ui-library';
import { CoreDataModule } from '@exercises/core-data';
import { CoreStateModule } from '@exercises/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LiftsComponent,
    LiftsListComponent,
    LiftDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
