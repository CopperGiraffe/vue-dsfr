<script setup>
import { ref } from 'vue'

import DsfrAlert from '@/components/DsfrAlert/DsfrAlert.vue'
import DsfrNotice from '@/components/DsfrNotice/DsfrNotice.vue'
// @ts-check

const noticeClosed = ref(false)

const closeNotice = () => {
  noticeClosed.value = true
  setTimeout(() => { noticeClosed.value = false }, 2000)
}

const alertClosed = ref(false)

const closeAlert = () => {
  alertClosed.value = true
  setTimeout(() => { alertClosed.value = false }, 2000)
}
</script>

<template>
  <p>
    <DsfrAlert
      title="Titre d’une info"
      type="info"
      description="Description de l’info"
    />
  </p>
  <p>
    <DsfrAlert
      :closeable="true"
      title="Titre d’une erreur fermable"
      description="Description de l’erreur fermable"
      type="error"
      :closed="alertClosed"
      @close="closeAlert()"
    />
  </p>
  <p>
    <DsfrNotice title="Titre d’un bandeau d’information importante" />
  </p>
  <p>
    <DsfrNotice
      v-if="!noticeClosed"
      title="Titre d’un bandeau d’information importante fermable"
      closeable
      @close="closeNotice()"
    />
  </p>
</template>
