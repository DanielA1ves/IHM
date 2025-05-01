import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CelebridadesPage } from './celebridades.page';

describe('CelebridadesPage', () => {
  let component: CelebridadesPage;
  let fixture: ComponentFixture<CelebridadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebridadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
