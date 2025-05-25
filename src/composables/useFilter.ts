import { ref, computed, onMounted } from 'vue'
import type { StatusFilter } from '@/types/statusFilter'
import { useTasks } from '@/composables/useTasks'

const STORAGE_KEY = 'filter'
const filter = ref<StatusFilter>('all')

const { tasks } = useTasks()

function filterTask(filterValue: StatusFilter) {
  switch (filterValue) {
    case 'active':
      return tasks.value.filter(task => !task.done)
    case 'done':
      return tasks.value.filter(task => task.done)
    default:
      return tasks.value
  }
}

const filteredTasks = computed(() => filterTask(filter.value))

function lengthFilteredTasks(filterValue: StatusFilter) {
  return filterTask(filterValue).length
}

function handleFilterChange(newFilter: StatusFilter) {
  filter.value = newFilter
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newFilter))
}

onMounted(() => {
  const savedFilter = localStorage.getItem(STORAGE_KEY)
  if (savedFilter) {
    try {
      const parsed = JSON.parse(savedFilter)
      if (['all', 'active', 'done'].includes(parsed)) {
        filter.value = parsed as StatusFilter
      }
    } catch {
      console.warn('Filtre corrompu')
      localStorage.removeItem(STORAGE_KEY)
    }
  }
})

export function useFilter() {
  return {
    filter,
    filteredTasks,
    lengthFilteredTasks,
    handleFilterChange
  }
}
