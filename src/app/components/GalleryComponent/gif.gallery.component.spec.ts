import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGalleryComponent } from './gif.gallery.component';

describe('GifGalleryComponent', () => {
  let component: GifGalleryComponent;
  let fixture: ComponentFixture<GifGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifGalleryComponent]
    });
    fixture = TestBed.createComponent(GifGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
