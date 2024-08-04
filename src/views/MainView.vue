<script setup>
import RfidRequest from '@/components/sensor-activated-state/RfidRequest.vue'
import FailedGetSensorState from '@/components/sensor-activated-state/FailedGetSensorState.vue'
import MonitoringDashboard from '@/components/monitoring/MonitoringDashboard.vue'
import { useSensorActivatedStatusStore } from '@/stores/sensor-activated-state'
import { WEB_SOCKET_URL } from '@/constants/websocket'

const sensorStore = useSensorActivatedStatusStore()

const ws = new WebSocket(WEB_SOCKET_URL + '/sensor-activated-state')
ws.onopen = () => {
  sensorStore.setConnectionState(true)
}

ws.onmessage = (event) => {
  const sensorState = JSON.parse(event.data)
  sensorStore.setSensorActivateState(sensorState)
}

ws.onclose = () => {
  sensorStore.setConnectionState(false)
  sensorStore.setSensorActivateState(false)
}

ws.onerror = () => {
  sensorStore.setConnectionState(false)
  sensorStore.setSensorActivateState(false)
}
</script>

<template>
  <div class="loading" v-if="sensorStore.gotConnection === undefined">
    <i class="pi pi-spin pi-spinner icon" />
  </div>
  <RfidRequest v-if="sensorStore.gotConnection && !sensorStore.sensorStateIsActivated" />
  <FailedGetSensorState
    v-if="sensorStore.gotConnection !== undefined && !sensorStore.gotConnection"
  />
  <MonitoringDashboard v-if="sensorStore.gotConnection && sensorStore.sensorStateIsActivated" />
</template>

<style scoped>
.loading {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 5rem;
  color: var(--p-primary-600);
}
</style>
