import axios from 'axios'

export const moviesDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'YOUR_API_KEY',
    language: 'en-EN'
  }
})
