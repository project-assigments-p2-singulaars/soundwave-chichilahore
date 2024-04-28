import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDiscoverComponent } from './main-discover.component';

describe('MainDiscoverComponent', () => {
  let component: MainDiscoverComponent;
  let fixture: ComponentFixture<MainDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDiscoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
