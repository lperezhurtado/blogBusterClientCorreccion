import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteAdminComponent } from './user-delete-admin.component';

describe('UserDeleteAdminComponent', () => {
  let component: UserDeleteAdminComponent;
  let fixture: ComponentFixture<UserDeleteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeleteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
