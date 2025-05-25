<template>
  <div>
    <button
      class="btn btn-sm rounded-circle p-1"
      :class="isDark ? 'btn-light' : 'btn-dark'"
      @click="handleToggle"
      data-mdb-toggle="tooltip"
      :title="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
    >
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import {useTheme} from "@/composables/useTheme.ts";
const {isDark, toggle} = useTheme();

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

function handleToggle() {
  toggle();
  emit('toggle');
}



</script>
