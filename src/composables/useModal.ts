import { ref, onMounted } from 'vue'
import { Modal } from 'mdb-ui-kit'

export function useModal<T extends HTMLElement = HTMLDivElement>() {
  const modalEl = ref<T | null>(null)
  let modalInstance: Modal | null = null

  const open = () => modalInstance?.show()
  const close = () => modalInstance?.hide()

  onMounted(() => {
    if (modalEl.value) {
      modalInstance = new Modal(modalEl.value)
    }
  })

  return {
    modalEl,
    open,
    close
  }
}
