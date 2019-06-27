<template>
  <div>
    <table>
      <colgroup>
        <col style="width: 33%">
        <col style="width: 33%">
        <col style="width: 33%">
      </colgroup>
      <tr>
        <td></td>
        <td class="table-print-header">
          Замовлення
          <br>№ 0001
        </td>
        <td class="table-print-header-right">
          Виконавець:
          <br>ПП "Володя"
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="table-print-header">10.10.2019</td>
        <td class="table-print-header-right">
          Контакти:
          <br>+38 000 000 00 00
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <span style="font-weight:bold">Автомобіль:</span>
          <br>Марка: ALFA ROMEO
          <br>Модель:159
          <br>Номер: AA 0000 AA
          <br>VIN: 939 0000000 939
        </td>
      </tr>
    </table>
    <table class="table-border">
      <colgroup>
        <col style="width: 10%">
        <col style="width: 60%">
        <col style="width: 15%">
        <col style="width: 15%">
      </colgroup>
      <tr>
        <td colspan="4" class="table-print-header">Виконані роботи:</td>
      </tr>
      <tr>
        <th class="table-align-right">№</th>
        <th>Наіменування</th>
        <th>Ціна (ГРН)</th>
        <th>Ціна (дол. США)</th>
      </tr>
      <tr>
        <td class="table-align-right">1</td>
        <td class="table-align-left">Ремонт</td>
        <td class="table-align-right">0</td>
        <td class="table-align-right">100</td>
      </tr>
      <tr>
        <th class="table-align-left" colspan="2">Сума:</th>
        <th class="table-align-right">0</th>
        <th class="table-align-right">0</th>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  border-collapse: collapse;
}

.table-border td,
th {
  border-style: solid;
  border-collapse: collapse;
  border-width: 1px;
  border-color: gray;
  border-spacing: 0px;
}

.table-align-left {
  text-align: left;
  padding-left: 5px;
}

.table-align-right {
  text-align: right;
  padding-right: 5px;
}

.table-print-header {
  text-align: center;
  padding: 10px;
  font-weight: bold;
}

.table-print-header-right {
  text-align: right;
  padding: 10px;
}
</style>

<script>
export default {
  name: "orderPrint",
  data() {
    return {};
  }
};
