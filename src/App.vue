<template>
  <v-app class="app-root">
    <v-app-bar app color="primary"> Vanti Front End Dev Assessment </v-app-bar>
    <v-main>
      <v-container fluid class="d-flex flex-row">
        <v-col cols="2" class="my-auto">
          <occupancy-filter-sidebar />
        </v-col>
        <v-col cols="10">
          <v-card>
            <occupancy-table />
          </v-card>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import OccupancyTable from '@/occupancy/OccupancyTable.vue'
import OccupancyFilterSidebar from '@/occupancy/OccupancyFilterSidebar.vue'
</script>
