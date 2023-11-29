import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from "ag-grid-community";
import { BtnCellRenderer } from './button-cell-renderer.component';
import { EditButtonCellRendererComponent } from './edit-button-cell-renderer/edit-button-cell-renderer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' },
    {
      field: 'athlete',
      cellRenderer: BtnCellRenderer,
      cellRendererParams: {
        clicked: (field: any) => {
          alert(`${field} was clicked`);
        }
      },
    },
    {
      field: 'athlete',
      cellRenderer: EditButtonCellRendererComponent,
      cellRendererParams: {
        clicked: (field: any) => {
          alert(`${field} was clicked`);
        }
      },
    }
    
  ];

  // DefaultColDef sets props common to all Columns
  // public defaultColDef: ColDef = {
  //   sortable: true,
  //   filter: true,
  // };
  
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  // onCellClicked( e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }

  // Example using Grid's API
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }
}