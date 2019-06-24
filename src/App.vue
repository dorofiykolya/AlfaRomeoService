<template>
  <div id="app">
    <div class="page-container">
      <md-tabs id="header-tabs" class="md-primary" md-alignment="left">
        <md-tab id="tab-home" md-icon="home"></md-tab>
        <md-tab id="tab-peaple" md-icon="people"></md-tab>
        <md-tab id="tab-favorites" md-icon="drive_eta"></md-tab>
      </md-tabs>
      <md-app>
        <md-app-content>
          <order></order>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
import order from "./components/Order.vue";

export default {
  name: "app",
  components: [order]
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
