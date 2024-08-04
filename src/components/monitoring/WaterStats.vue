<script setup>
import { useWaterLevelRecordStore } from '@/stores/water-level-record'
import { getFormattedDate } from '@/utils/date-utils'

const waterLevelRecordsStore = useWaterLevelRecordStore()
</script>

<template>
  <div class="stats">
    <div class="stat">
      <div class="stat__icon">
        <i class="pi pi-box" />
      </div>
      <div class="stat__value">
        {{
          waterLevelRecordsStore.getLastWaterLevelRecord()
            ? waterLevelRecordsStore.getLastWaterLevelRecord().volumeMl.toFixed(2) + 'ml'
            : '-'
        }}
      </div>
      <div class="stat__label">Volumen</div>
    </div>
    <div class="stat">
      <div class="stat__icon">
        <i class="pi pi-arrows-v" />
      </div>
      <div class="stat__value">
        {{
          waterLevelRecordsStore.getLastWaterLevelRecord()
            ? waterLevelRecordsStore.getLastWaterLevelRecord().heightCm.toFixed(2) + 'cm'
            : '-'
        }}
      </div>
      <div class="stat__label">Altura</div>
    </div>
    <div class="stat">
      <div class="stat__icon">
        <i class="pi pi-percentage" />
      </div>
      <div class="stat__value">
        {{
          waterLevelRecordsStore.getLastWaterLevelRecord()
            ? (waterLevelRecordsStore.getLastWaterLevelRecord().percent * 100).toFixed(2) + '%'
            : '-'
        }}
      </div>
      <div class="stat__label">Nivel de agua</div>
    </div>
  </div>
  <div class="last-updated-time">
    <p>
      Actualizado:
      {{
        getFormattedDate(waterLevelRecordsStore.getLastWaterLevelRecord()?.dateTime ?? undefined)
      }}
    </p>
  </div>
</template>

<style scoped>
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 5rem;
  justify-content: center;
}

.stat {
  flex-basis: 1;
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  grid-template-rows: repeat(2, 0fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
}

.stat__icon {
  grid-area: 1 / 1 / 3 / 2;

  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 2rem;
    color: var(--p-primary-600);
  }
}

.stat__value {
  grid-area: 1 / 2 / 2 / 3;
  font-size: 1.5rem;
}

.stat__label {
  grid-area: 2 / 2 / 3 / 3;
  font-size: 0.75rem;
  white-space: nowrap;
}

.last-updated-time {
  text-align: center;
  font-size: 0.75rem;
  margin-top: 1rem;
  color: #a9a9a9;
}
</style>
