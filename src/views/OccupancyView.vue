<template>
  <v-container fluid class="d-flex flex-row">
    <v-col cols="2">
      <occupancy-filter-sidebar />
    </v-col>
    <v-col cols="10">
      <v-card>
        <occupancy-table />
      </v-card>
    </v-col>
  </v-container>
</template>

<script setup>
import OccupancyTable from '@/occupancy/OccupancyTable.vue'
import OccupancyFilterSidebar from '@/occupancy/OccupancyFilterSidebar.vue'
</script>
