import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoomComponent } from './show-room.component';

describe('ShowRoomComponent', () => {
  let component: ShowRoomComponent;
  let fixture: ComponentFixture<ShowRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
