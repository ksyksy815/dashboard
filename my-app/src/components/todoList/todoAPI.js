import axios from 'axios'

export const fetchTodos = () => {
  const URL = 'http://jsonplaceholder.typicode.com/todos'

  return axios(`${URL}?_start=0&_limit=5`)
}