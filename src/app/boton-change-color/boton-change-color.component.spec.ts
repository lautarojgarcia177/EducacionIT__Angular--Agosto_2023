import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonChangeColorComponent } from './boton-change-color.component';

describe('BotonChangeColorComponent', () => {
  let component: BotonChangeColorComponent;
  let fixture: ComponentFixture<BotonChangeColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonChangeColorComponent]
    });
    fixture = TestBed.createComponent(BotonChangeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
