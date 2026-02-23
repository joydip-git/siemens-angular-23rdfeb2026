import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Other } from './other';

describe('Other', () => {
  let component: Other;
  let fixture: ComponentFixture<Other>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Other]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Other);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
