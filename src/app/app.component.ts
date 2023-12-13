import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import {  ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellComponent } from './my-cell/my-cell.component';
import { UpdateComponent } from './update/update.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field: 'userid'},
    { field: 'name'},
    { field: 'email'},
    { field: 'role' },
    {headerName:  "Action" ,cellRenderer: MyCellComponent},
    {headerName: "Action", cellRenderer: UpdateComponent}
    // {
    //   field: 'Delete',
    //   cellRenderer: BtnCellRenderer,
    //   cellRendererParams: {
    //     clicked: (field: any) => {
    //       alert(`${field} was clicked`);
    //     }
    //   },
    // },
    // {
    //   field: 'Update',
    //   cellRenderer: EditButtonCellRendererComponent,
    //   cellRendererParams: {
    //     clicked: (field: any) => {
    //       alert(`${field} was clicked`);
    //     }
    //   },
    // }
    
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
params: any;

  constructor(private http: HttpClient) {}
  

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('http://localhost:8080/users');
  }

  openCreateModal(){
    console.log("opened Create popup modal");
    const createmodal = document.getElementById('CreateModal');
    if(createmodal != null){
      createmodal.style.display='block';
    }
  }


    CloseCreateModal(){
      console.log("close")
      const createmodal = document.getElementById('CreateModal');
      if(createmodal != null){
        createmodal.style.display='none';
      }
    }

    openDeleteModal(){
      console.log("open");
      const createmodal = document.getElementById('DeleteModal');
      if(createmodal != null){
        createmodal.style.display='block';
      }}

      openUpdateModal(){
        console.log("open");
        const createmodal = document.getElementById('UpdateModal');
        if(createmodal != null){
          createmodal.style.display='block';
        }}

      CloseDeleteModal(){
        console.log("close")
        const createmodal = document.getElementById('DeleteModal');
        if(createmodal != null){
          createmodal.style.display='none';
        }
      }

      CloseUpdateModal(){
        console.log("close")
        const createmodal = document.getElementById('UpdateModal');
        if(createmodal != null){
          createmodal.style.display='none';
        }
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