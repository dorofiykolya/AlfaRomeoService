<template>
  <div id="app">
    <div class="page-container">
      <md-tabs id="header-tabs" class="md-primary" md-alignment="left">
        <md-tab id="tab-home" md-icon="home" @click="$router.push('/')"></md-tab>
        <md-tab id="tab-peaple" md-icon="people" @click="$router.push('/clients')"></md-tab>
        <md-tab id="tab-favorites" md-icon="drive_eta" @click="$router.push('/autos')"></md-tab>
      </md-tabs>
      <md-app>
        <md-app-content>
          <router-view></router-view>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
