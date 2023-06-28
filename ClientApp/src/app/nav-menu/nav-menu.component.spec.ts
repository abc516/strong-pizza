import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavMenuComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isExpanded to false', () => {
    expect(component.isExpanded).toBeFalse();
  });

  it('should collapse the menu', () => {
    component.isExpanded = true;
    component.collapse();
    expect(component.isExpanded).toBeFalse();
  });

  it('should toggle the menu', () => {
    component.toggle();
    expect(component.isExpanded).toBeTrue();

    component.toggle();
    expect(component.isExpanded).toBeFalse();
  });
});
