import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdHomeComponent } from './curd-home.component';

describe('CurdHomeComponent', () => {
  let component: CurdHomeComponent;
  let fixture: ComponentFixture<CurdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
