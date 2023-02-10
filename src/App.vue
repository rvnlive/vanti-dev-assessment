<template>
  <v-app class="app-root">
    <v-app-bar app color="primary">
      Vanti Front End Dev Assessment
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card>
          <occupancy-table/>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import OccupancyTable from '@/occupancy/OccupancyTable.vue';
</script>
