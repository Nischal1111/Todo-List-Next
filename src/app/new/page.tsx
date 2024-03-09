import { error } from "console"
import Link from "next/link"
import { prisma } from "../db"
import { redirect } from "next/navigation"


async function createTodo(data: FormData) {
  "use server";

  const todo = data.get("todo")?.valueOf();
  if (typeof todo !== "string" || todo.length===0) {
    throw new Error("Invalid input");
  }

  await prisma.todo.create({ data: { todo, completed: false } });
  redirect("/")
}

export default function Page(){
  return (
    <>
     <header className="flex justify-between mb-4 items-center">
      <h1 className="text-2xl ">New</h1>
    </header>
    <form action={createTodo}>
      <input type="text" className="text-black" name="todo">
      </input>
    <div>
      <Link href=".." className="border p-2 rounded outline-none bg-slate-500 hover:bg-slate-800">Cancel</Link>
      <button type="submit" className="border p-2 rounded outline-none bg-slate-500 hover:bg-slate-800">Create</button>
    </div>
    </form>
    </>
  )
}
