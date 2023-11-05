"use client"
import { trpc } from '@/app/_trpc/client'

export const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery()

  return <ul>
    {JSON.stringify(getTodos.data)}
  </ul>
}