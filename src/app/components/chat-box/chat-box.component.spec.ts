import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxComponent } from './chat-box.component';

xdescribe('ChatBoxComponent', () => {
  let component: ChatBoxComponent;
  let fixture: ComponentFixture<ChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
