import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirxjsComponent } from './mirxjs.component';

describe('MirxjsComponent', () => {
  let component: MirxjsComponent;
  let fixture: ComponentFixture<MirxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
