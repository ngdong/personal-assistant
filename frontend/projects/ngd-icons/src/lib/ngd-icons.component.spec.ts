import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdIconsComponent } from './ngd-icons.component';

describe('NgdIconsComponent', () => {
  let component: NgdIconsComponent;
  let fixture: ComponentFixture<NgdIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
