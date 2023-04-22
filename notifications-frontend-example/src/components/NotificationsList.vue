<script setup>
import NotificationItem from './NotificationItem.vue';

defineProps({
  notifications: {
    type: Array,
    required: true
  },

})
</script>

<template>
  <div id="list-container">
    <div v-for="notification in notifications">
      <NotificationItem :notification="notification" />
  
      <div v-show="notifications.length > 1" id="separator" />
    </div>
  </div>
</template>

<style scoped>
#list-container {
  padding: 12px;
}

#separator {
  height: 1px;
  width: 100%;
  margin: 6px 0;
  background-color: hsla(160, 100%, 37%, 0.2);
}

</style>