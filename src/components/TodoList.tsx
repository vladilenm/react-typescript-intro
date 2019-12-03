import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle
}) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет!</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
