import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRecords } from './records'

export const useModifiedRecords = defineStore('modifiedRecords', {
  state: () => ({
    sidebarSelection: 'All',
    tableData: []
  }),
  getters: {
    getActiveSidebarSelection: (state) => state.sidebarSelection
  },
  actions: {
    filterRecord() {
      const records = useRecords().history

      if (this.sidebarSelection !== 'All') {
        this.tableData = records.filter(record => { return record.floor === this.sidebarSelection })
      } else this.tableData = records
    }
  }
})