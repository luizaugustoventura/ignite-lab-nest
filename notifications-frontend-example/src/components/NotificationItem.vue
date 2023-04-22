<script setup>
defineProps({
  notification: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <div>
    {{ notification.content }}
  </div>
</template>

<style scoped>
</style>