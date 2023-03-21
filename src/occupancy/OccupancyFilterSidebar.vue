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
import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useRecords } from '@/occupancy/records'
import { useModifiedRecords } from '@/occupancy/modifiedRecords'

const records = useRecords()
const { sidebarSelection } = storeToRefs(useModifiedRecords())

const floors = computed(() => {
  return [...records.floors, 'All'].sort()
})

watch(sidebarSelection, () => useModifiedRecords().filterRecord())
</script>
