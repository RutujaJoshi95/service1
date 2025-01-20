import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostList2Component } from './post-list2.component';

describe('PostList2Component', () => {
  let component: PostList2Component;
  let fixture: ComponentFixture<PostList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
