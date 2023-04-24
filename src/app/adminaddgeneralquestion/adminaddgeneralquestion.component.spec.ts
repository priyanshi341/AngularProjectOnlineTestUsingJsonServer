import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddgeneralquestionComponent } from './adminaddgeneralquestion.component';

describe('AdminaddgeneralquestionComponent', () => {
  let component: AdminaddgeneralquestionComponent;
  let fixture: ComponentFixture<AdminaddgeneralquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddgeneralquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddgeneralquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
