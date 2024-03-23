import { Component, OnInit, OnDestroy } from '@angular/core';
import { GifApiRestService } from 'src/app/services/gif.api.service';
import { Gif } from 'src/interfaces/gif.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gif.search',
  templateUrl: './gif.search.component.html',
  styleUrls: ['./gif.search.component.scss']
})


export class GifSearchComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  gifs: Gif[] = [];
  private subscription!: Subscription;

  constructor(private gifService: GifApiRestService) { }

  ngOnInit(): void {
    this.loadDefaultGifs();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadDefaultGifs(): void {
    this.gifService.findGifs('hello').subscribe(
      (response) => {
        this.gifs = response.data;
      },
      (error) => {
        console.error('Error cargando los gif por default', error);
      }
    )
  }

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

  searchByCategory(category: string) {
    this.gifService.findGifs(category).subscribe(
      (response) => {
        this.gifs = response.data;
      },
      (error) => {
        console.error('Error en la busqueda por categoria', error);
      }
    );
  }
}