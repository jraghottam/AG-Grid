import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonCellRendererComponent } from './edit-button-cell-renderer.component';

describe('EditButtonCellRendererComponent', () => {
  let component: EditButtonCellRendererComponent;
  let fixture: ComponentFixture<EditButtonCellRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditButtonCellRendererComponent]
    });
    fixture = TestBed.createComponent(EditButtonCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
