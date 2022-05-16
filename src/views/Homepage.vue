  
<script setup>
import { computed } from 'vue';
import { useStore } from '../store';

const store = useStore();

const count = computed(() => {
  return store.count;
})

const updateCount = () => {
  store.updateCount()
}
</script>

<template>
 <main>
 </main>
</template>
