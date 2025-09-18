import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStructureComponent } from './book-structure.component';

describe('BookStructureComponent', () => {
  let component: BookStructureComponent;
  let fixture: ComponentFixture<BookStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
