import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCommonFolderComponent } from './upload-common-folder.component';

describe('UploadCommonFolderComponent', () => {
  let component: UploadCommonFolderComponent;
  let fixture: ComponentFixture<UploadCommonFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCommonFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCommonFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
