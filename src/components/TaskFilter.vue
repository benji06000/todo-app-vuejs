<template>
  <div class="btn-group mt-3 mb-4 w-100">
    <button
      class="btn"
      :class="filter === 'all' ? 'btn-primary' : 'btn-outline-primary'"
      @click="handleFilterChange('all')"
    >Toutes ({{ lengthFilteredTasks('all') }})
    </button>

    <button
      class="btn"
      :class="filter === 'active' ? 'btn-primary' : 'btn-outline-primary'"
      @click="handleFilterChange('active')"
    >Actives ({{ lengthFilteredTasks('active') }})
    </button>

    <button
      class="btn"
      :class="filter === 'done' ? 'btn-primary' : 'btn-outline-primary'"
      @click="handleFilterChange('done')"
    >Terminées ({{ lengthFilteredTasks('done') }})
    </button>
  </div>
</template>

<script setup lang="ts">
import {useFilter} from '@/composables/useFilter'

const {filter, lengthFilteredTasks, handleFilterChange} = useFilter()


</script>
