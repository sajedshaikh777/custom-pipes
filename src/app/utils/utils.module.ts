import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CaptureDataObservableService } from '../services/data/capture.data.observable.service';
import { ErrorContentObservableService } from '../services/data/error.content.observable.service';
import { FromAccountObservableService } from '../services/data/from-account-observable.service';
import { DataServicesFactory } from '../services/data/data-services.factory';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    { provide: ErrorContentObservableService, useValue: DataServicesFactory.getErrorContentFactory() },
    CaptureDataObservableService,
    FromAccountObservableService
  ],
  bootstrap: []
})
export class UtilsModule {

}
