import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeHealthComponent } from './bridge-health.component';

describe('BridgeHealthComponent', () => {
  let component: BridgeHealthComponent;
  let fixture: ComponentFixture<BridgeHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
