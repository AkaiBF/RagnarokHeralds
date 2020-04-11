import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleesComponent } from './melees.component';

describe('MeleesComponent', () => {
  let component: MeleesComponent;
  let fixture: ComponentFixture<MeleesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeleesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
