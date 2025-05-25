<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
    ref="modalEl"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
            Annuler
          </button>
          <button type="button" class="btn btn-danger" @click="confirm">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useModal} from "@/composables/useModal.ts";

const {open, close, modalEl} = useModal()

const {title, message} = defineProps<{
  title: string
  message: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

function confirm() {
  emit('confirm')
  close()
}

defineExpose({ open, close })
</script>
