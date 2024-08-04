import { defineStore } from 'pinia'

export const useSensorActivatedStatusStore = defineStore('sensor', {
  state: () => ({
    gotConnection: undefined,
    sensorStateIsActivated: false
  }),
  actions: {
    setConnectionState(status) {
      this.gotConnection = status
    },
    setSensorActivateState(state) {
      this.sensorStateIsActivated = state
    }
  }
})
