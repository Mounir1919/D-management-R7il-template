<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from './layout/MainLayout.vue'

export default {
  computed: {
    layout() {
      const noLayoutRoutes = ['/login_register']
      return noLayoutRoutes.includes(this.$route.path) ? 'div' : MainLayout
    }
  },
  components: {
    MainLayout
  }
}
</script>
