import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsLib } from './ims-lib';

describe('ImsLib', () => {
  let component: ImsLib;
  let fixture: ComponentFixture<ImsLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImsLib],
    }).compileComponents();

    fixture = TestBed.createComponent(ImsLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
