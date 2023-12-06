import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedosComponent } from './homedos.component';

describe('HomedosComponent', () => {
  let component: HomedosComponent;
  let fixture: ComponentFixture<HomedosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedosComponent]
    });
    fixture = TestBed.createComponent(HomedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
