import { ref, onMounted } from 'vue'

const isDark = ref(true)

const STORAGE_KEY = 'theme'
export function useTheme() {
  function toggle() {
    isDark.value = !isDark.value
    apply()
  }

  function apply() {
    document.body.classList.toggle('dark', isDark.value)
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    isDark.value = !(saved === 'light')
    apply()
  })

  return {
    isDark,
    toggle,
    apply
  }
}
