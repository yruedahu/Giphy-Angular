import { Component, Input } from '@angular/core';
import { Gif } from 'src/interfaces/gif.interface';

@Component({
  selector: 'app-gif-gallery',
  templateUrl: './gif.gallery.component.html',
  styleUrls: ['./gif.gallery.component.scss']
})
export class GifGalleryComponent {
  @Input() gifs: Gif[] = [];
}
