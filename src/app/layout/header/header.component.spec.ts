import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatToolbarModule,
        MatIconModule,
        RouterTestingModule.withRoutes([])
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isSidenavOpen = true at the beggining', () => {
    expect(component.isSidenavOpen).toBe(true);
  })

  it('emitToggle false and true', () => {
    component.openSidenav();
    expect(component.isSidenavOpen).toBe(false);

    component.openSidenav();
    expect(component.isSidenavOpen).toBe(true);
  })

  it('correct span = Alejandro Starter', () => {
    const spanHeader: HTMLElement = fixture.debugElement.query(By.css('.clickeable')).nativeElement;
    expect(spanHeader.innerHTML).toContain('Alejandro Starter');
  })

  it('correct toggle emit', () => {
    spyOn(component.toggleSidenav, 'emit');

    component.openSidenav();
    expect(component.toggleSidenav.emit).toHaveBeenCalled();
  })

  it('correct link to home as attribute', () => {
    const linkElement = fixture.debugElement.query(By.css('.clickeable'));
    const routerLink = linkElement.attributes['routerLink'];

    expect(routerLink).toBe('/');
  })

  it('correct link to home as html tag', () => {
    const linkElement2 = fixture.debugElement.query(By.css('.clickeable')).nativeElement;
    const routerLink2 = linkElement2.getAttribute('routerLink');

    expect(routerLink2).toBe('/');
  })
});
