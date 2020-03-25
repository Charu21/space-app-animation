import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceMissionComponent } from './space-mission.component';

describe('SpaceMissionComponent', () => {
  let component: SpaceMissionComponent;
  let fixture: ComponentFixture<SpaceMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
