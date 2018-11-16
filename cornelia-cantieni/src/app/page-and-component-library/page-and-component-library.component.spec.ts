import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAndComponentLibraryComponent } from './page-and-component-library.component';

describe('PageAndComponentLibraryComponent', () => {
  let component: PageAndComponentLibraryComponent;
  let fixture: ComponentFixture<PageAndComponentLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAndComponentLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAndComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
