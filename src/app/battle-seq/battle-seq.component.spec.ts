import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleSeqComponent } from './battle-seq.component';

describe('BattleSeqComponent', () => {
  let component: BattleSeqComponent;
  let fixture: ComponentFixture<BattleSeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleSeqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleSeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
