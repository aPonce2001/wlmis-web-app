<script setup>
import WaterStats from './WaterStats.vue'
import WaterChart from './WaterChart.vue'
import WaterLastestRecords from './WaterLastestRecords.vue'
import { useWaterLevelRecordStore } from '@/stores/water-level-record'
import { WEB_SOCKET_URL } from '@/constants/websocket'

const waterLevelRecordsStore = useWaterLevelRecordStore()
const ws = new WebSocket(WEB_SOCKET_URL + '/water-level')

ws.onopen = () => {}

ws.onmessage = (event) => {
  const waterLevelRecord = JSON.parse(event.data)
  waterLevelRecordsStore.addWaterLevelRecord(waterLevelRecord)
}

ws.onclose = () => {
  waterLevelRecordsStore.setWaterLevelRecords([])
}
</script>

<template>
  <div class="page">
    <header class="header">
      <h1 class="title">Sistema integrado de monitoreo del nivel de agua</h1>
    </header>
    <main class="main">
      <div class="board">
        <div class="card chart">
          <WaterChart />
        </div>
        <div class="card records">
          <h2 class="subtitle">Últimos registros:</h2>
          <WaterLastestRecords />
        </div>
      </div>
      <div class="card stats">
        <h2 class="subtitle">Estadísticas:</h2>
        <WaterStats />
      </div>
    </main>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 0 0.5rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 0rem;
}

.title {
  font-size: 1.5rem;
  color: var(--p-primary-600);
}

.subtitle {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}

.main {
  background-color: #eee;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
}

.card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.125rem 0.125rem 0.5rem 0.125rem #ddd;
}

.board {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.chart {
  flex: 1 1 480px;
  min-width: 480px;
}

.records {
  flex: 1 1 480px;
  min-width: 480px;
}

.stats {
  padding-bottom: 1rem;
}
</style>
