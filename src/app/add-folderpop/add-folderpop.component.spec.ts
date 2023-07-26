import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFolderpopComponent } from './add-folderpop.component';

describe('AddFolderpopComponent', () => {
  let component: AddFolderpopComponent;
  let fixture: ComponentFixture<AddFolderpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFolderpopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFolderpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
