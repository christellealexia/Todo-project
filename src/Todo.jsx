
import PropTypes from 'prop-types';


const Todo = ({ todo, toggleComplete, deleteTodo }) => {

    return (
      <div className='flex gap-8 text-2xl'>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleComplete(todo.id)} 
        />
        <span 
          style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none',
            marginLeft: '8px' 
          }}
        >
          {todo.text}
        </span>
        <button 
          onClick={() => deleteTodo(todo.id)} 
          style={{ marginLeft: 'auto' }}
        >
          Delete
        </button>
      </div>
    );
  };

  Todo.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

export default Todo
