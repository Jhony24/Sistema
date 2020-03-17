import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponentComponentCssComponent } from './projects-component.component.css.component';

describe('ProjectsComponent.Component.CssComponent', () => {
  let component: ProjectsComponentComponentCssComponent;
  let fixture: ComponentFixture<ProjectsComponentComponentCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponentComponentCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponentComponentCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
