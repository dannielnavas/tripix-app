import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOfferCardComponent } from './special-offer-card.component';

describe('SpecialOfferCardComponent', () => {
  let component: SpecialOfferCardComponent;
  let fixture: ComponentFixture<SpecialOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialOfferCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
