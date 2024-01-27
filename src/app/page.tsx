import Link from "next/link"
import { prisma } from "./db";
import { TodoItem } from "./components/TodoItem";


function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home() {
    const todos= await getTodos()
  return (<>

    <header className="flex justify-between mb-4 items-center">
      <h1 className="text-2xl ">Todos</h1>
      <Link className="border p-2 rounded outline-none bg-slate-500 hover:bg-slate-800" href="/new">
        New
      </Link>
    </header>
    <ul>
      {todos.map(todo =>(
        <TodoItem key={todo.id}{...todo}/>
      ))}
    </ul>
    </>
  );
}
