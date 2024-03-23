import { Component } from '@angular/core';
import { GifApiRestService } from 'src/app/services/gif.api.service';
import { Gif } from 'src/interfaces/gif.interface';

@Component({
  selector: 'app-gif.search',
  templateUrl: './gif.search.component.html',
  styleUrls: ['./gif.search.component.scss']
})


export class GifSearchComponent {
  searchTerm: string = '';
  gifs: Gif[] = [];

  constructor(private gifService: GifApiRestService) {}

  findGift(): void {
    if (this.searchTerm.trim()) {
      this.gifService.findGifs(this.searchTerm.trim()).subscribe(
        (response) => {
          this.gifs = response.data;
          console.log(response.data);
        },
        (error) => {
          console.error('Error en la busqueda de los gif', error);
        }
      );
    }
  }
}