import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GifGalleryComponent } from './components/GalleryComponent/gif.gallery.component';
import { GifSearchComponent } from './components/SearchComponent/gif.search.component';


@NgModule({
  declarations: [
    AppComponent,
    GifGalleryComponent,
    GifSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
