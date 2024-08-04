<template>
  <main class="main">
    <div>
      <i class="pi pi-times icon" />
    </div>
    <h1 class="title">No se pudo obtener el estado del sensor</h1>
    <p class="description">
      No se ha podido obtener el estado del sensor. Por favor, inténtelo de nuevo.
    </p>
  </main>
</template>

<style scoped>
.main {
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 5rem;
  color: var(--p-primary-600);
  margin-bottom: 1rem;
}

.title {
  text-align: center;
}

.description {
  text-align: center;
}
</style>
