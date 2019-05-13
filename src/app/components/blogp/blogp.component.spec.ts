import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpComponent } from './blogp.component';

describe('BlogpComponent', () => {
  let component: BlogpComponent;
  let fixture: ComponentFixture<BlogpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
