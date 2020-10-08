import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdModalComponent } from './ngd-modal.component';

describe('NgdModalComponent', () => {
  let component: NgdModalComponent;
  let fixture: ComponentFixture<NgdModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
