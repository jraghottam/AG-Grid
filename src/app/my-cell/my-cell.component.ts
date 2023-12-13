import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellEditorAngularComp, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  template: `
  <style>
    .createbtn{
      margin: 2px 2px;
      
      border-radius: 5px;
    }
  </style>
    <div class="">
      <button class="createbtn" (click)="onClick()">Update Data</button>
    </div>

  `,
  styles: [
    
  
  ]
})
export class MyCellComponent implements  ICellRendererAngularComp {
  public params!: ICellRendererParams;

  constructor(private router: Router) {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }

  onClick(): void {
    console.log("opened Create popup modal");
    console.log(this.params);
    const createmodal = document.getElementById('CreateModal');
    if(createmodal != null){
      createmodal.style.display='inline-block';
    } 
  }

  

  

}
