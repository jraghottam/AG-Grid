import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'btn-cell-renderer',
    template: `
      <button (click)="btnClickedHandler()">Delete</button>
    `,
  })
  export class BtnCellRenderer implements ICellRendererAngularComp {
    refresh(params: ICellRendererParams<any, any, any>): boolean {
        throw new Error("Method not implemented.");
    }
    private params: any;
  
    agInit(params: any): void {
      this.params = params;
    }
  
    btnClickedHandler() {
      this.params.clicked(this.params.value);
    }
  }