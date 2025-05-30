import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckViewComponent } from './deck-view.component';

describe('DeckViewComponent', () => {
  let component: DeckViewComponent;
  let fixture: ComponentFixture<DeckViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
