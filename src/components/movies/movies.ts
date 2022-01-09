import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url: string =
  'https://api.themoviedb.org/3/discover/movie?api_key=6508d38cf3e9e01e311d1b9fb2c358d9&sort_by=popularity.desc';

@Component({
    templateUrl: './movies.html'
  })

  export class Movies {
    movies:any;
    searchText:any;
    constructor(private http: HttpClient) {}
    ngOnInit() {
        this.http.get(url).subscribe((data: any) => {
          console.log(data);
          this.movies = data.results;
        });
      }
  }