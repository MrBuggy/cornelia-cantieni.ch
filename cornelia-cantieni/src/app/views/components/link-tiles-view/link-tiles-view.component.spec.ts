import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTilesViewComponent } from './link-tiles-view.component';

describe('LinkTilesViewComponent', () => {
  let component: LinkTilesViewComponent;
  let fixture: ComponentFixture<LinkTilesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTilesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTilesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
