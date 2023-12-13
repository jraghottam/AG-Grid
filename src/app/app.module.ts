import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyCellComponent } from './my-cell/my-cell.component';

import { AppRoutingModule } from './app-routing.module';
import { UpdateComponent } from './update/update.component';
// import { OperationComponent } from './grid/options-cell-renderer/options-cell-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCellComponent,
    UpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    NgbModule,
    AppRoutingModule,
    // OperationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }