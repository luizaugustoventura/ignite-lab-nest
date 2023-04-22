<script setup>
import { reactive } from 'vue';
import Popper from 'vue3-popper';
import NotificationsList from './NotificationsList.vue';

const data = reactive({
  notifications: [],
  setNotifications(data) {
    this.notifications = data;
  }
});

function getNotifications() {
  fetch('http://localhost:3000/notifications/from/test-notifications').then(async (res) => {
    const notifications = await res.json();
    data.setNotifications(notifications.notifications);
    console.log(notifications.notifications);
  })
};

getNotifications();
</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

  <Popper>
    <button type="button">
      <span id="count" v-show="data.notifications.length">
        {{
          data.notifications.length > 9
            ? `${data.notifications.length}+`
            : data.notifications.length
        }}
      </span>

      <span class="material-symbols-outlined icon">
        notifications
      </span>
    </button>

    <template #content>
      <div class="popover">
        <NotificationsList :notifications="data.notifications" />
      </div>
    </template>
  </Popper>
</template>

<style scoped>
#count {
  position: absolute;
  background-color: red;
  height: 18px;
  width: 18px;
  margin-top: -4px;
  margin-left: calc(30px - 18px);
  border-radius: 9px;
  font-size: 12px;
  color: white;
  z-index: 3;
}

.icon {
  color: #FAFAFA;
  font-size: 30px;
}

button {
	border: none;
	cursor: pointer;
  background: none;
	color: inherit;
}

.popover {
  width: 300px;
  height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #111;
}

.popover::-webkit-scrollbar {
  width: 4px;
}

.popover::-webkit-scrollbar-track {
  background: none;
}

.popover::-webkit-scrollbar-thumb {
  background: hsla(160, 100%, 37%, 0.3);
}

.popover::-webkit-scrollbar-thumb:hover {
  background: hsla(160, 100%, 37%, 0.2);
}
</style>