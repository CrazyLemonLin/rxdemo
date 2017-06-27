import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqRequestComponent } from './seq-request.component';

describe('SeqRequestComponent', () => {
  let component: SeqRequestComponent;
  let fixture: ComponentFixture<SeqRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeqRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeqRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
