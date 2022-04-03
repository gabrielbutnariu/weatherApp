import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/body/search/search.component';
import { WeatherComponent } from './components/body/weather/weather.component';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './components/body/weather/card/card.component';
import { InfoComponent } from './components/body/weather/info/info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    WeatherComponent,
    CardComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
