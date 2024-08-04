<template>
  <main class="main">
    <div>
      <i class="pi pi-power-off icon" />
    </div>
    <h1 class="title">El sensor no está activado para enviar datos</h1>
    <p class="description">
      Active el sensor con su <strong>Tag RFID</strong> para empezar a recibir datos.
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

  strong {
    color: var(--p-primary-600);
  }
}
</style>
