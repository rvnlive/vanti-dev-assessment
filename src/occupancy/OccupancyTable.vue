<template>
  <v-data-table :items="records.tableData" :headers="headers" />
</template>

<script setup>
import { computed } from 'vue'
import { useModifiedRecords } from './modifiedRecords'

const records = useModifiedRecords()
const headers = computed(() => {
  return [
    { text: 'When', value: 'time' },
    { text: 'Floor', value: 'floor' },
    { text: 'Occupancy', value: 'peopleCount', align: 'right' },
  ]
})

// on created lifecycle
records.filterRecord()
</script>
