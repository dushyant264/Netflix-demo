import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MY_API_KEY, BASE_URL } from '../utilis/constant';
import axios from 'axios';

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: []
}
export const getGenres=createAsyncThunk("netflix/genres", async()=>{
    const {data: {genres}}= await axios.get(`${BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`)
    // console.log(genres)
    return genres
})

const arrayOfMovieData=(array,movieArray,genres)=>{
    array.forEach((movie)=>{
        const movieGenres=[]
        movie.genre_ids.forEach((genre)=>{
            const name=genres.find(({id})=>id===genre)
            if(name){
                movieGenres.push(name.name)
            }
        })
        if(movie.backdrop_path)
          movieArray.push({
         id: movie.id,
         name: movie?.original_name ? movie.original_name : movie.original_title,
         image: movie.backdrop_path,
         genres: movieGenres.slice(0,2)
        })
    })
}
const getMovieData=async(api, genres,paging=false)=>{
    const movieArray=[]
    for(let i=1;movieArray.length<80&& i<10;i++){
        const {data: {results},} =  await axios.get(`${api}${paging ? `&page=${i}` : ""}`)
        arrayOfMovieData (results, movieArray, genres)
    }
    return movieArray
}

export const fetchMovies = createAsyncThunk("netflix/trending", async ({type}, myThunk)=>{
    const {netflix: {genres},} = myThunk.getState()
   return getMovieData(`${BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`, genres, true );
    // console.log(data)
  })

const NetflixSlice= createSlice({
    name:'Netflix',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getGenres.fulfilled, (state, action)=>{
            state.genresLoaded=true;
            state.genres=action.payload
        })
    }
})

export const store=configureStore({
    reducer:{
        netflix:NetflixSlice.reducer
    }
})