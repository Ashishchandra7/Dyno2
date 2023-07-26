import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPopComponent } from './common-pop.component';

describe('CommonPopComponent', () => {
  let component: CommonPopComponent;
  let fixture: ComponentFixture<CommonPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
