import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSaveComponent } from './file-save.component';

describe('FileSaveComponent', () => {
  let component: FileSaveComponent;
  let fixture: ComponentFixture<FileSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
