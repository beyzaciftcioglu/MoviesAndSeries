import { http } from '@angular/common/http';


export const getMovies=()=>{
    return http.get( 'https://api.themoviedb.org/3/discover/movie?api_key=6508d38cf3e9e01e311d1b9fb2c358d9&sort_by=popularity.desc');
}

export const getSeries=()=>{
    return http.get(   'https://api.themoviedb.org/3/trending/tv/day?api_key=6508d38cf3e9e01e311d1b9fb2c358d9');
}
