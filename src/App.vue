<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import MainLayout from './layout/MainLayout.vue'

export default {
  components: {
    MainLayout
  }
}
</script>
