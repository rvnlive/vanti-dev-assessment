<template>
  <v-data-table :items="records.history" :headers="headers"/>
</template>

<script setup>
import {useRecords} from '@/occupancy/records';
import {computed} from 'vue';

const records = useRecords();
const headers = computed(() => {
  return [
    {text: 'When', value: 'time'},
    {text: 'Floor', value: 'floor'},
    {text: 'Occupancy', value: 'peopleCount', align: 'right'}
  ]
})
</script>
