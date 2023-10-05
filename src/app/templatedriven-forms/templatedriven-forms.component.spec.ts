import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenFormsComponent } from './templatedriven-forms.component';

describe('TemplatedrivenFormsComponent', () => {
  let component: TemplatedrivenFormsComponent;
  let fixture: ComponentFixture<TemplatedrivenFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatedrivenFormsComponent]
    });
    fixture = TestBed.createComponent(TemplatedrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
