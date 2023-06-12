import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlaverComponent } from './klaver.component';

describe('KlaverComponent', () => {
  let component: KlaverComponent;
  let fixture: ComponentFixture<KlaverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlaverComponent]
    });
    fixture = TestBed.createComponent(KlaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
