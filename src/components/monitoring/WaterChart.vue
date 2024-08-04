<script setup>
import { useWaterLevelRecordStore } from '@/stores/water-level-record'

import Chart from 'primevue/chart'
import { onMounted, ref, watch } from 'vue'

const waterLevelRecordsStore = useWaterLevelRecordStore()

const data = ref(setData())
const options = ref({
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        callback: function (value) {
          return value + '%'
        }
      }
    }
  },
  animation: {
    duration: 0
  }
})

function setData() {
  return {
    labels: ['Nivel de agua (%)'],
    datasets: [
      {
        label: 'Nivel de agua (%)',
        backgroundColor: '#0891b2',
        data: [100 * (waterLevelRecordsStore.getLastWaterLevelRecord()?.percent ?? 0)]
      }
    ]
  }
}

const updateData = () => {
  data.value = setData()
}

watch(() => waterLevelRecordsStore.waterLevelRecords, updateData, { deep: true })

onMounted(() => {
  updateData()
})
</script>

<template>
  <Chart type="bar" :data="data" :options="options" />
</template>
