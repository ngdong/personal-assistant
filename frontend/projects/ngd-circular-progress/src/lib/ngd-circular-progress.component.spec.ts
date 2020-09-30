import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdCircularProgressComponent } from './ngd-circular-progress.component';

describe('NgdCircularProgressComponent', () => {
  let component: NgdCircularProgressComponent;
  let fixture: ComponentFixture<NgdCircularProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdCircularProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdCircularProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
