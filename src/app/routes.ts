import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { MenuComponent} from './menu/menu.component';
import { WeatherComponent} from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';

 export const routes: Routes = [
    { path: '' , redirectTo: '/weather', pathMatch: 'full'},
    { path: 'weather' ,component : WeatherComponent},
    { path: 'currency' ,redirectTo: '/currency' ,component : CurrencyComponent},
    { path: 'movie' ,redirectTo: '/movie' , component : MovieComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class RoutingModule  {
    static component = [MenuComponent,WeatherComponent,CurrencyComponent,MovieComponent]
}
