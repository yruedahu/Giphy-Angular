import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GifApiRestService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  findGifs(findTerm: string): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${findTerm}&limit=21`;
    return this.httpClient.get(url);
  }
}
