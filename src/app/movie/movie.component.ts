import { Component} from '@angular/core';
import { SharedService } from '../shared.service';
import { Response } from '@angular/http';
import { IMovies } from '../interfaces/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  {

  movieInfo: IMovies;
  status:boolean;
  movie_title:string;  
  errorMessage:string;

  constructor(private _sharedService : SharedService) { 
    this.status = false;
  }

  callMovieService(){
    this._sharedService.findMovie(this.movie_title)
      .subscribe(resMovieInfo => {
        this.movieInfo = resMovieInfo,
        console.log(resMovieInfo),
        this.status = true;
        error => this.errorMessage = error;
      })
  }

  



}
