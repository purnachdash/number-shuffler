import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBlocksComponent } from './number-blocks.component';

describe('NumberBlocksComponent', () => {
  let component: NumberBlocksComponent;
  let fixture: ComponentFixture<NumberBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
