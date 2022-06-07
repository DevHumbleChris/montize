<script setup>
import { computed } from "vue";
import { useStore } from "../store";
import Aside from "./Aside.vue";
import Header from "./Header.vue";
// import Footer from "./Footer.vue";

const store = useStore();

const sideMenu = computed(() => {
  return store.sideMenu;
});
</script>

<template>
  <section class="relative">
    <!-- Aside Component -->
    <Aside />
    <!-- End Of Aside Component -->
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <!-- Header Componet -->
      <Header />
      <!-- End Of Header Component -->
      <!-- Content Here -->
      <router-view />
      <!-- End Of Content Here -->
      <!-- <Footer /> -->
    </div>
  </section>
</template>
