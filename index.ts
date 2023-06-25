import axios from "axios"
import { IMovie } from "./interface"

const apiKey = '2bb9848d1b2a29d2b3ee67cefced85c0'
const baseURL = 'https://api.themoviedb.org/3'
const discoverURL = `${baseURL}https://api.themoviedb.org/3/discover/movie${apiKey}`

// 1. Async await
const getDiscoverIMovies = async () => {
    const response = await axios.get(discoverURL);
    console.log(response.data.results.map((movie: IMovie) => movie.title))
}
