import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPredictComponent } from './stock-predict.component';

describe('StockPredictComponent', () => {
  let component: StockPredictComponent;
  let fixture: ComponentFixture<StockPredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
