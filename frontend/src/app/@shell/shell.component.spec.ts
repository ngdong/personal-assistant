import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TrackByPropertyPipe } from '@shared/pipes/track-by-property.pipe';
import { MockNgdIconsComponent } from '@core/mocks/ngd-icons.component.mock';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ShellComponent,
        HeaderComponent,
        FooterComponent,
        MockNgdIconsComponent,
        TrackByPropertyPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
