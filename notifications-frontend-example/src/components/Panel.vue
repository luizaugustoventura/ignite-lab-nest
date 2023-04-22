<template>
  <div id="container">
    <main id="content">
      <img src="../assets/valut_guy.png" height="120" />
      
      <div class="info">
        <h1>Notifications app</h1>
      
        <h3>This is a helper app for consulting notifications from the NestJS microservice</h3>
      </div>
    </main>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex: 1;
  height: calc(100% - var(--header-height));
  justify-content: center;
  align-items: center;
  background-image: 
    url('../assets/unsplash.avif');
  background-size: cover;
}

#content {
  display: flex;
  margin: 0 8px;
  padding: 24px;
  max-width: 680px;
  flex-direction: row;
  border-radius: 12px;
  background-color: rgba(30, 30, 30, 0.6);
  color: #D3D3D3;
}

#content .info {
  margin-left: 20px;
}

#content h3 {
  margin-top: 4px;
}

@media (max-width: 600px) {
  #content {
    padding: 24px 16px;
  }

  #content img {
    height: 100px;
  }

  #content h1 {
    font-size: 26px;
  }

  #content h3 {
    font-size: 16px;
  }
}
</style>