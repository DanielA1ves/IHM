import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesportoPage } from './desporto.page';

describe('DesportoPage', () => {
  let component: DesportoPage;
  let fixture: ComponentFixture<DesportoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesportoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
