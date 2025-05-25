<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <label class="d-flex align-items-center gap-2 m-0 w-100">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ 'text-decoration-line-through text-muted': task.done }">
        {{ task.label }}
      </span>
    </label>
    <button
      class="btn btn-sm btn-outline-danger"
      @click="$emit('remove', index)"
      data-mdb-toggle="tooltip"
      title="Supprimer la tâche"
    >
      🗑️
    </button>
  </li>
</template>

<script setup lang="ts">
import type { Task } from '@/types/task'

defineProps<{ task: Task, index: number }>()
defineEmits<{
  (e: 'remove', index: number): void
}>()
</script>
