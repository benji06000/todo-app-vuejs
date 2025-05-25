import { ref, type Ref } from 'vue'
import type { Task } from '@/types/task'

const STORAGE_KEY = 'tasks'

const tasks = ref<Task[]>([])

export function useTasks(): {
  tasks: Ref<Task[]>
  addTask: (label: string) => void
  removeTask: (index: number) => void
  clearDone: () => void
} {

  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      tasks.value = JSON.parse(saved)
    } catch (e) {
      console.warn('LocalStorage corrompu')
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const persist = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value))
  }

  const addTask = (label: string) => {
    tasks.value.push({
      uuid: crypto.randomUUID(),
      label,
      done: false
    })
    persist()
  }

  const removeTask = (index: number) => {
    tasks.value.splice(index, 1)
    persist()
  }

  const clearDone = () => {
    tasks.value = tasks.value.filter(t => !t.done)
    persist()
  }

  return { tasks, addTask, removeTask, clearDone }
}
