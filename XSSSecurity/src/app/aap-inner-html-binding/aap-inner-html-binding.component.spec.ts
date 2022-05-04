import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AapInnerHtmlBindingComponent } from './aap-inner-html-binding.component';

describe('AapInnerHtmlBindingComponent', () => {
  let component: AapInnerHtmlBindingComponent;
  let fixture: ComponentFixture<AapInnerHtmlBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AapInnerHtmlBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AapInnerHtmlBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
