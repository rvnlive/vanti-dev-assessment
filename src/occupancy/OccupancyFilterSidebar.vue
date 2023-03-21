<template>
  <v-card>
    <v-card-title>Available Floors</v-card-title>
    <hr class="grey lighten-5 mb-2">
    <v-list nav>
      <v-list-item-group v-model="sidebarSelection" color="primary">
        <v-list-item
          v-for="(floor, index) in floors"
          :key="index"
          :disabled="floor === sidebarSelection"
          :value="floor"
          @click="setURLQuery(floor)"
        >
          {{ floor }}</v-list-item
        >
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script setup>
import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import router from '@/router'

import { useRecords } from '@/occupancy/records'
import { useModifiedRecords } from '@/occupancy/modifiedRecords'

const records = useRecords()
const { sidebarSelection } = storeToRefs(useModifiedRecords())

const floors = computed(() => {
  return [...records.floors, 'All'].sort()
})

function setURLQuery(floor) {
  if (floor !== sidebarSelection.value) {
    const replaceSpace = floor.replaceAll(' ', '_')
    router.push({ query: { filter: replaceSpace } })
  }
}

watch(sidebarSelection, () => useModifiedRecords().filterRecord())
</script>
