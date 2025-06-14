<template>
  <div id="wrapper">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  },
  mounted() {
    // Si des scripts JS externes doivent être appelés
    setTimeout(() => {
      if (window?.init) {
        window.init(); // exemple : fonction JS définie dans functions.bundle.js
      }
    }, 100);
  }
}
</script>

