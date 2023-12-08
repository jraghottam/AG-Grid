import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-edit-button-cell-renderer',
  templateUrl: './edit-button-cell-renderer.component.html',
  styleUrls: ['./edit-button-cell-renderer.component.scss']
})
export class EditButtonCellRendererComponent implements ICellRendererAngularComp,OnInit {
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error("Method not implemented.");
}
private params: any;

agInit(params: any): void {
  this.params = params;
}

ngOnInit() {} 
  
  displayStyle = "none";

openPopup() {
  const modelDiv = document.getElementById('exampleModal');
  if(modelDiv != null){
    modelDiv.style.display = 'block';
  }
  
  // this.params.clicked(this.params.value);
  // this.displayStyle = "block";
}

closePopup() { 
  const modelDiv = document.getElementById('exampleModal');
  if(modelDiv != null){
    modelDiv.style.display = 'none';
  } 
} 

}
