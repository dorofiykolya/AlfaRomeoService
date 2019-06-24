<template>
  <div class="order">
    <md-card>
      <md-card-header>
        <div class="md-layout">
          <div class="md-layout-item">
            <div class="md-title">Заказ наряд</div>
          </div>
          <div class="md-layout-item">
            <div class="md-title">№0001</div>
          </div>
          <div class="md-layout-item">
            <md-datepicker v-model="selectedDate" md-immediately/>
          </div>
        </div>
      </md-card-header>

      <md-card-content>
        <md-datepicker v-model="date"/>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      msg: "Hello world!",
      selectedDate: Date.now()
    };
  }
};
</script>

<style scoped>
</style>
