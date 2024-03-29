const endpoint = `https://super-crud-api.herokuapp.com/api/todos`
class TodoModel {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log('Could not get all todos\n', err));
  };
  static create = (todo) => {
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(response => response.json())
      .catch(error => console.log('Could not post todo \n', error))
  }
  static delete = (todo) => {
    return fetch(`${endpoint}/${todo._id}`, {
      method: "DELETE"
    })
      .then(response=> response.json())
      .catch(error => console.log("Couldn't delete the todo", error))
  };
};

export default TodoModel
