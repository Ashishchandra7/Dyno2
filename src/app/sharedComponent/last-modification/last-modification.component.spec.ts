import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastModificationComponent } from './last-modification.component';

describe('LastModificationComponent', () => {
  let component: LastModificationComponent;
  let fixture: ComponentFixture<LastModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastModificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
