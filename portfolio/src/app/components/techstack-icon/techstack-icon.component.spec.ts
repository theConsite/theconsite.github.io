import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackIconComponent } from './techstack-icon.component';

describe('TechstackIconComponent', () => {
  let component: TechstackIconComponent;
  let fixture: ComponentFixture<TechstackIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstackIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechstackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
