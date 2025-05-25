<template>
  <svg
    v-if="type === 'success'"
    xmlns="http://www.w3.org/2000/svg"
    class="text-white"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <animate attributeName="stroke-dashoffset" values="24;0" dur="0.4s" fill="freeze" />
    </path>
  </svg>

  <svg
    v-else-if="type === 'danger'"
    xmlns="http://www.w3.org/2000/svg"
    class="text-white shake"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <svg
    v-else-if="type === 'info'"
    xmlns="http://www.w3.org/2000/svg"
    class="text-white spin"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
    <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>

  <svg
    v-else-if="type === 'warning'"
    xmlns="http://www.w3.org/2000/svg"
    class="text-white pulse"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a1.75 1.75 0 0 0 1.5 2.64h17.36a1.75 1.75 0 0 0 1.5-2.64L13.71 3.86a1.75 1.75 0 0 0-3.42 0z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  type: 'success' | 'danger' | 'info' | 'warning'
}>()
</script>

<style scoped>
.spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.shake {
  animation: shake 0.4s ease;
}
@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
}

.pulse {
  animation: pulse 1s ease infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style>
