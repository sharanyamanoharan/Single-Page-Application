import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';
import { routes, RoutingModule } from './routes';
import { SharedService } from './shared.service';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    CurrencyComponent,
    MovieComponent, 
    RoutingModule.component     
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule ,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule ,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
