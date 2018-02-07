import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitPredictComponent } from './bit-predict.component';

describe('BitPredictComponent', () => {
  let component: BitPredictComponent;
  let fixture: ComponentFixture<BitPredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitPredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
