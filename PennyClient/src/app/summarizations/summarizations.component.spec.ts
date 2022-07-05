import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizationsComponent } from './summarizations.component';

describe('SummarizationsComponent', () => {
  let component: SummarizationsComponent;
  let fixture: ComponentFixture<SummarizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
