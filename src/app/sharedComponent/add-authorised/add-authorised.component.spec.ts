import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthorisedComponent } from './add-authorised.component';

describe('AddAuthorisedComponent', () => {
  let component: AddAuthorisedComponent;
  let fixture: ComponentFixture<AddAuthorisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAuthorisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAuthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
