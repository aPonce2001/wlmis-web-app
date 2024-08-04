import { defineStore } from 'pinia'

export const useWaterLevelRecordStore = defineStore('waterLevelRecord', {
  state: () => ({
    waterLevelRecords: []
  }),
  actions: {
    addWaterLevelRecord(record) {
      if (record === undefined || record === null) {
        return
      }

      if (Array.isArray(record)) {
        this.waterLevelRecords = this.waterLevelRecords.concat(record)
        return
      }

      if (this.waterLevelRecords.length >= 20) {
        this.waterLevelRecords.shift()
      }
      this.waterLevelRecords.push(record)
    },
    getLastWaterLevelRecord() {
      if (this.waterLevelRecords.length === 0) {
        return undefined
      }
      return this.waterLevelRecords[this.waterLevelRecords.length - 1]
    },
    setWaterLevelRecords(records) {
      this.waterLevelRecords = records
    }
  }
})
