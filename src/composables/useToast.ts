import { ref, nextTick } from 'vue'
import { Toast } from 'mdb-ui-kit'
import type { ToastVariant } from '@/types/toast'
import {useTheme} from '@/composables/useTheme'

const toastMessage = ref('')
const toastVariant = ref<ToastVariant>('dark')
const toastEl = ref<HTMLDivElement | null>(null)
const {isDark} = useTheme()
const toastIcons: Record<ToastVariant, string> = {
  success: '✅',
  danger: '❌',
  info: 'ℹ️',
  warning: '⚠️',
  dark: '🌙',
  light: '☀️',
  default: '' // fallback
}

function showToast(message: string, variant: ToastVariant = 'default', delay: number = 5000) {
  toastMessage.value = message
  toastVariant.value = variant === 'default'
    ? (isDark.value ? 'dark' : 'light')
    : variant

  nextTick(() => {
    if (toastEl.value) {
      const instance = new Toast(toastEl.value,
        {
          autohide: true,
          delay
        })
      instance.show()
    }
  })
}

export function useToast() {
  return {
    toastMessage,
    toastVariant,
    toastIcons,
    toastEl,
    showToast,
  }
}
