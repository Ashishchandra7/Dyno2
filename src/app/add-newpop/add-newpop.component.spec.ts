import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewpopComponent } from './add-newpop.component';

describe('AddNewpopComponent', () => {
  let component: AddNewpopComponent;
  let fixture: ComponentFixture<AddNewpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewpopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
