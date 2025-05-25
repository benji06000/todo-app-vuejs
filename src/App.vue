<template>
  <main class="container py-5">
    <div class="card shadow p-4">
      <ThemeToggle class="mb-3 d-flex justify-content-end" @toggle="handleThemeChange"/>

      <h2 class="text-center mb-4">Ma TODO App</h2>

      <form @submit.prevent="handleAddTask" class="input-group">
        <input
          v-model="newTask"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': hasError }"
          placeholder="Ajouter une tâche..."
        />
        <div v-if="hasError" class="invalid-feedback mt-2rem">
          Le champ ne peut pas être vide
        </div>
        <button class="btn btn-primary" type="submit">
          Ajouter
        </button>
      </form>

      <button
        class="btn btn-danger mt-4 mb-4 w-100"
        @click="handleClearDone"
        :disabled="!tasks.some(t => t.done)"
      >
        Effacer les tâches terminées
      </button>

      <TaskFilter/>

      <ul class="list-group">
        <TaskItem
          v-for="(task, index) in filteredTasks"
          :key="`task-${task.uuid}`"
          :index="index"
          :task="task"
          @remove="askRemove"
        />
      </ul>
    </div>

    <ConfirmModal
      ref="confirmModal"
      title="Confirmer la suppression"
      :message="`Voulez-vous vraiment supprimer la tâche : « ${tasks[pendingIndex!]?.label ?? ''} » ?`"
      @confirm="confirmRemove"
    />

    <BaseToast/>
  </main>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {Tooltip} from 'mdb-ui-kit'
import BaseToast from '@/components/Toast.vue'
import TaskItem from '@/components/TaskItem.vue'
import ConfirmModal from '@/components/modals/ConfirmModal.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import TaskFilter from "@/components/TaskFilter.vue";
import {useTasks} from '@/composables/useTasks'
import {useTheme} from "@/composables/useTheme.ts";
import {useToast} from '@/composables/useToast'
import {useFilter} from '@/composables/useFilter'

const {filteredTasks} = useFilter()
const {tasks, addTask, removeTask, clearDone} = useTasks()
const {showToast} = useToast()

const newTask = ref('')
const hasError = ref(false)
const {isDark} = useTheme();
const pendingIndex = ref<number | null>(null)
const confirmModal = ref<InstanceType<typeof ConfirmModal> | null>(null)

onMounted(() => {
  //- Tooltip
  const tooltipTriggerList =
    [].slice.call(
      document.querySelectorAll('[data-mdb-toggle="tooltip"]')
    )
  tooltipTriggerList.map(el => new Tooltip(el))
})

function handleThemeChange() {
  showToast(
    `Thème ${isDark.value ? 'sombre' : 'clair'} activé`,
    'info'
  )
}

function handleAddTask() {
  const trimmed = newTask.value.trim()
  if (!trimmed) {
    hasError.value = true
    showToast('Tâche vide non autorisée', 'danger')
    return
  }
  hasError.value = false
  addTask(trimmed)
  newTask.value = ''
  showToast('Tâche ajoutée avec succès', 'success')
}

function askRemove(index: number) {
  pendingIndex.value = index
  confirmModal.value?.open()
}

function confirmRemove() {
  if (pendingIndex.value !== null) {
    removeTask(pendingIndex.value)
    pendingIndex.value = null
  }
}

function handleClearDone() {
  clearDone()
  showToast('Tâches terminées effacées', 'info')
}


</script>
