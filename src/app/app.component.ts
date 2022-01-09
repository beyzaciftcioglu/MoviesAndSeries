import { Component } from '@angular/core';
import axios from 'axios';
const http=axios.create({
  timeout:6000
});

const url: string =
  'https://api.themoviedb.org/3/discover/movie?api_key=6508d38cf3e9e01e311d1b9fb2c358d9&sort_by=popularity.desc';
const url2: string =
  'https://api.themoviedb.org/3/trending/tv/day?api_key=6508d38cf3e9e01e311d1b9fb2c358d9';

@Component({
  selector: 'movies-and-series',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  movies:any;
  series:any;


  ngOnInit() {
  http.get(url).then((response)=>{
    console.log(response.data.results);
    this.movies=response.data.results;
  })
  http.get(url2).then((response)=>{
    console.log(response.data.results);
    this.series=response.data.results;
  })
  
  }
}
