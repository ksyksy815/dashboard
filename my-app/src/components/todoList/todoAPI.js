import axios from "axios";

export async function fetchTodo () {
  const todos = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos_start=0&_limit=5'
  })
  .then(res => {
    const result = JSON.parse(res)
    return result
  })
  .catch(err => console.log(err))

  return todos
}
