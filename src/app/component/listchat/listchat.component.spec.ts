import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchatComponent } from './listchat.component';

describe('ListchatComponent', () => {
  let component: ListchatComponent;
  let fixture: ComponentFixture<ListchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListchatComponent]
    });
    fixture = TestBed.createComponent(ListchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
