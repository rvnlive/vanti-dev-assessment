<template>
  <v-card>
    <v-list nav>
      <v-list-item-group v-model="sidebarSelection" color="primary">
        <v-list-item v-for="(floor, index) in floors" :key="index" :value="floor"> {{ floor }}</v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
const sidebarSelection = ref('All')

const floors = computed(() => {
  return ['Example', 'All'].sort()
})
</script>
