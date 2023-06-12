import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorvComponent } from './morv.component';

describe('MorvComponent', () => {
  let component: MorvComponent;
  let fixture: ComponentFixture<MorvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorvComponent]
    });
    fixture = TestBed.createComponent(MorvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
