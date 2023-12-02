import axios from 'axios'

export const moviesDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a0a6c5bcc2aa33755c5c8780ad193763',
    language: 'en-EN'
  }
})