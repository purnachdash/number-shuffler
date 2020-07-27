import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBlocksVerticalComponent } from './number-blocks-vertical.component';

describe('NumberBlocksVerticalComponent', () => {
  let component: NumberBlocksVerticalComponent;
  let fixture: ComponentFixture<NumberBlocksVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberBlocksVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberBlocksVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
