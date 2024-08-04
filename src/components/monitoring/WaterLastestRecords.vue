<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import { useWaterLevelRecordStore } from '@/stores/water-level-record'
import { getFormattedDate } from '@/utils/date-utils'

const waterLevelRecordsStore = useWaterLevelRecordStore()
const recordsContainer = ref(null)

const scrollToBottom = async () => {
  await nextTick()
  recordsContainer.value.scrollTop = recordsContainer.value.scrollHeight
}

watch(
  () => waterLevelRecordsStore.waterLevelRecords.length,
  async () => {
    await nextTick()
    const records = recordsContainer.value.querySelectorAll('.record')
    const newRecord = records[records.length - 1]
    if (newRecord) {
      newRecord.classList.add('highlight')
      setTimeout(() => {
        newRecord.classList.remove('highlight')
      }, 1000)
    }
    await scrollToBottom()
  }
)

onMounted(scrollToBottom)
</script>

<template>
  <div ref="recordsContainer" class="records">
    <div v-for="record in waterLevelRecordsStore.waterLevelRecords" :key="record.id">
      <div class="record">
        <div class="record__values">
          <div class="record__volume">
            <i class="pi pi-box icon" /> {{ record.volumeMl.toFixed(2) }} ml
          </div>
          <div class="record__height">
            <i class="pi pi-arrows-v icon" /> {{ record.heightCm.toFixed(2) }} cm
          </div>
          <div class="record_percent">
            <i class="pi pi-percentage icon" /> {{ (100 * record.percent).toFixed(2) }} %
          </div>
        </div>
        <div class="record__date">
          {{ getFormattedDate(record.dateTime) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes highlight {
  0% {
    background-color: var(--p-primary-100);
  }
  100% {
    background-color: transparent;
  }
}

.highlight {
  animation: highlight 2s ease;
}

.records {
  max-height: 350px;
  overflow-y: auto;
}

.record {
  border-bottom: 1px solid #e0e0e0;
  padding: 0.5rem 0.5rem 0.5rem 0;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
}

.record__date {
  font-size: 0.7rem;
  color: #a0a0a0;
}

.icon {
  color: #a0a0a0;
  margin-right: 0.5rem;
  font-size: 0.8rem;
}
</style>
