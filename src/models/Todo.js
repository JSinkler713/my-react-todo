const endpoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log('Could not get all todos\n', err));
  };
};

export default TodoModel
