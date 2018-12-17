import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanLinkTilesComponent } from './can-link-tiles.component';

describe('CanLinkTilesComponent', () => {
  let component: CanLinkTilesComponent;
  let fixture: ComponentFixture<CanLinkTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanLinkTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanLinkTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
