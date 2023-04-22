<script setup>
import Notifications from './Notifications.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  
    <Notifications />
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: var(--header-height);
  z-index: 2;
  line-height: 1.5;
  background-color: hsla(160, 100%, 37%, 1);
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  color: #FAFAFA;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }
}
</style>