import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { TableComponent } from './table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [ MatTableModule ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call highlight() with appropriate parameters',()=>{
    component.arrowDownEvent(2);
    spyOn(component,'highlight')
    expect(component.highlight).toHaveBeenCalledWith(3);
  })
});
