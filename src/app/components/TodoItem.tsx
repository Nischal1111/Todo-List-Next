import React from 'react'

type TodoItemProp={
    id:string
    todo:string
    completed:boolean
}

export function TodoItem ({todo,id,completed}:TodoItemProp) {
  return (
    <li className='flexbox gap-2 '>

    </li>
  )
}
