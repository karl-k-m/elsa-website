import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenyydComponent } from './menyyd.component';

describe('MenyydComponent', () => {
  let component: MenyydComponent;
  let fixture: ComponentFixture<MenyydComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenyydComponent]
    });
    fixture = TestBed.createComponent(MenyydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
