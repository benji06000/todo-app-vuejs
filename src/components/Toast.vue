<template>
  <div
    ref="el"
    :class="[
      'toast',
      'align-items-center',
      'position-fixed',
      'border-0',
      'bottom-0',
      'end-0',
      'm-3',
      `bg-${toastVariant}`
    ]"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body d-flex align-items-center gap-2">
        <!--
        <span v-if="toastIcons.hasOwnProperty(toastVariant)" class="fs-5">
          {{ toastIcons[toastVariant] }}
        </span>
        -->
        <ToastIcon v-if="['success','danger','info','warning'].includes(toastVariant)" :type="toastVariant" />
        <span>{{ toastMessage }}</span>
      </div>
      <button
        type="button"
        :class="[
          'btn-close',
          `btn-close-${isDark ? 'white' : 'dark'}`,
          'me-2',
          'm-auto'
        ]"
        data-mdb-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToastIcon from '@/components/icons/ToastIcon.vue'
import {useToast} from '@/composables/useToast'
import {useTheme} from '@/composables/useTheme'

const {toastEl, toastMessage, toastVariant, toastIcons} = useToast()
const {isDark} = useTheme()

const el = toastEl
</script>
