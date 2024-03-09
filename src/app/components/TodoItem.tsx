import React from 'react'

type TodoItemProp={
    id:string
    todo:string
    completed:boolean
}

export function TodoItem ({todo,id,completed}:TodoItemProp) {
  return (
    <li className='flex items-center gap-2 '>
      <input id={id} className='peer cursor-pointer' type='checkbox'>
      </input>
      <label htmlFor={id} className='peer-checked:line-through'>
        {todo}
      </label>
    </li>
  )
}
