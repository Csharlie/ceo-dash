import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoListComponent } from './ceo-list.component';

describe('CeoListComponent', () => {
  let component: CeoListComponent;
  let fixture: ComponentFixture<CeoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
