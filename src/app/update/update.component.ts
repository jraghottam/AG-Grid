import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-update',
  template: `
    <div>
      <button (click)="onUpdateClick()">Update Data</button>
    </div>
  `,
  styles: [
  ]
})
export class UpdateComponent implements ICellRendererAngularComp {

  public params!: ICellRendererParams
  agInit(params: ICellRendererParams): void {
    this.params=params
  }
  refresh(): boolean {
    return false
  }

  onUpdateClick(): void {
    console.log("opened Create popup modal");
    const createmodal = document.getElementById('UpdateModal');
    if(createmodal != null){
      createmodal.style.display='inline-block';
    }
    
  }

}
