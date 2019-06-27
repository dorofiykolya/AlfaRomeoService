<template>
  <div class="order">
    <md-card>
      <md-card-header>
        <div class="header-print"></div>
        <div class="md-layout">
          <div class="md-layout-item">
            <div class="md-title">ЗАМОВЛЕННЯ</div>
          </div>
          <div class="md-layout-item">
            <div class="md-title">№{{orderNumber}}</div>
          </div>
          <div class="md-layout-item">
            <md-datepicker v-model="orderDate" md-immediately/>
          </div>
          <div class="md-layout-item">
            <md-button class="md-fab header-button-print" @click="printContent">
              <md-icon>print</md-icon>
            </md-button>
          </div>
        </div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>КЛІЄНТ:</label>
          <md-textarea v-model="client" md-autogrow></md-textarea>
        </md-field>

        <!-- -->
        <div class="md-layout md-gutter md-alignment-vertical-top header-title">
          <div class="md-layout-item-left">
            <h1 class="hide-space">_</h1>
            <h1>ВИКОНАНІ РОБОТИ:</h1>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item">
            <md-field>
              <label>НАІМЕНУВАННЯ:</label>
              <md-textarea class="input-border" v-model="workName" md-autogrow></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-10">
            <md-field>
              <label>ГРН</label>
              <md-input v-model="workUA" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-10">
            <md-field>
              <label>ДОЛ США</label>
              <md-input v-model="workUSD" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-10">
            <md-field>
              <label>ЄВРО</label>
              <md-input v-model="workEURO" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-5">
            <md-button class="md-fab header-button-print md-mini" @click="addWork">
              <md-icon>add</md-icon>
            </md-button>
          </div>
        </div>
        <!-- -->
        <!-- -->
        <div class="md-layout md-gutter md-alignment-vertical-top header-title">
          <div class="md-layout-item-left">
            <h1 class="hide-space">_</h1>
            <h1>ЗАПЧАСТИНИ ТА МАТЕРІАЛИ:</h1>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item">
            <md-field>
              <label>НАІМЕНУВАННЯ:</label>
              <md-textarea class="input-border" v-model="materialName" md-autogrow></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-10">
            <md-field>
              <label>КІЛЬКІСТЬ</label>
              <md-input v-model="materialCount" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-10">
            <md-field>
              <label>ГРН</label>
              <md-input v-model="materialUA" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-10">
            <md-field>
              <label>ДОЛ США</label>
              <md-input v-model="materialUSD" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-10">
            <md-field>
              <label>ЄВРО</label>
              <md-input v-model="materialEURO" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-5">
            <md-button class="md-fab header-button-print md-mini" @click="addMaterial">
              <md-icon>add</md-icon>
            </md-button>
          </div>
        </div>
        <!-- -->

        <div>
          <h1 class="hide-space">_</h1>
          <!-- <h1>РОБОТИ:</h1> -->
          <md-table v-model="works" md-card @md-selected="onSelectWorks">
            <md-table-toolbar>
              <h1 class="md-title">ВИКОНАНІ РОБОТИ:</h1>
            </md-table-toolbar>

            <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
              <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

              <div class="md-toolbar-section-end">
                <md-button class="md-icon-button" @click="deleteSelectedWorks">
                  <md-icon>delete</md-icon>
                </md-button>
              </div>
            </md-table-toolbar>

            <md-table-row
              slot="md-table-row"
              slot-scope="{ item }"
              md-selectable="multiple"
              md-auto-select
            >
              <md-table-cell md-label="НАІМЕНУВАННЯ" md-sort-by="name">{{ item.name }}</md-table-cell>
              <md-table-cell md-label="ГРН" md-sort-by="ua">{{ item.ua }}</md-table-cell>
              <md-table-cell md-label="ДОЛ США" md-sort-by="usd">{{ item.usd }}</md-table-cell>
              <md-table-cell md-label="ЄВРО" md-sort-by="euro">{{ item.euro }}</md-table-cell>
            </md-table-row>
          </md-table>
          <p>{{ workResult() }}</p>
        </div>

        <!-- -->
        <div>
          <h1 class="hide-space">_</h1>
          <!-- <h1>Запчастини та матеріали:</h1> -->
          <md-table v-model="materials" md-card @md-selected="onSelectMaterials">
            <md-table-toolbar>
              <h1 class="md-title">ЗАПЧАСТИНИ ТА МАТЕРІАЛИ:</h1>
            </md-table-toolbar>

            <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
              <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

              <div class="md-toolbar-section-end">
                <md-button class="md-icon-button" @click="deleteSelectedMaterials">
                  <md-icon>delete</md-icon>
                </md-button>
              </div>
            </md-table-toolbar>

            <md-table-row
              slot="md-table-row"
              slot-scope="{ item }"
              md-selectable="multiple"
              md-auto-select
            >
              <md-table-cell md-label="НАІМЕНУВАННЯ" md-sort-by="name">{{ item.name }}</md-table-cell>
              <md-table-cell md-label="КІЛЬКІСТЬ" md-sort-by="count">{{ item.ua }}</md-table-cell>
              <md-table-cell md-label="ГРН" md-sort-by="ua">{{ item.ua }}</md-table-cell>
              <md-table-cell md-label="ДОЛ США" md-sort-by="usd">{{ item.usd }}</md-table-cell>
              <md-table-cell md-label="ЄВРО" md-sort-by="euro">{{ item.euro }}</md-table-cell>
            </md-table-row>
          </md-table>
          <p>{{ materialResult() }}</p>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      client: "",
      workName: "",
      workUA: 0,
      workUSD: 0,
      workEURO: 0,
      materialName: "",
      materialCount: 0,
      materialUA: 0,
      materialUSD: 0,
      materialEURO: 0,
      orderNumber: "0001",
      orderDate: Date.now(),
      selectedWork: [],
      works: [],
      selectedMaterials: [],
      materials: []
    };
  },
  methods: {
    readPrintFile(callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", "print.html", true);
      rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
          callback(rawFile.responseText);
        }
      };
      rawFile.send();
    },
    printContent() {
      this.readPrintFile(txt => {
        console.log(txt);

        var PrintKey = {
          OrderNumber: "{{orderNumber}}",
          OrderDate: "{{orderDate}}",
          Works: "{{works}}",
          Materials: " {{materials}}",
          ClientName: "{{clientName}}"
        };

        var WorkTemplateKey = {
          OrderNumber: "{{orderNumber}}",
          OrderName: "{{orderName}}",
          PriceUA: "{{priceUA}}",
          PriceUSD: "{{priceUSD}}",
          PriceEURO: "{{priceEURO}}"
        };

        var MaterialTemplateKey = {
          OrderNumber: "{{orderNumber}}",
          OrderName: "{{orderName}}",
          OrderCount: "{{orderCount}}",
          PriceUA: "{{priceUA}}",
          PriceUSD: "{{priceUSD}}",
          PriceEURO: "{{priceEURO}}"
        };

        var workTemplate =
          '<tr><td class="table-align-right">{{orderNumber}}</td><td class="table-align-left">{{orderName}}</td><td class="table-align-right">{{priceUA}}</td><td class="table-align-right">{{priceUSD}}</td><td class="table-align-right">{{priceEURO}}</td></tr>';

        var materialTemplate =
          '<tr><td class="table-align-right">{{orderNumber}}</td><td class="table-align-left">{{orderName}}</td><td class="table-align-right">{{orderCount}}</td><td class="table-align-right">{{priceUA}}</td><td class="table-align-right">{{priceUSD}}</td><td class="table-align-right">{{priceEURO}}</td></tr>';
        var html = "";
        html = txt;
        html = html.replace(
          PrintKey.OrderDate,
          new Date(this.orderDate).toDateString()
        );
        html = html.replace(PrintKey.OrderNumber, this.orderNumber);
        html = html.replace(PrintKey.ClientName, this.client);

        var worksResult = [];
        var workIndex = 1;
        this.works.forEach(e => {
          var work = workTemplate;
          work = work.replace(WorkTemplateKey.OrderNumber, workIndex);
          work = work.replace(WorkTemplateKey.OrderName, e.name);
          work = work.replace(WorkTemplateKey.PriceUA, e.ua);
          work = work.replace(WorkTemplateKey.PriceUSD, e.usd);
          work = work.replace(WorkTemplateKey.PriceEURO, e.euro);
          worksResult.push(work);
          workIndex++;
        });
        html = html.replace(PrintKey.Works, worksResult.join(""));

        var materialsResult = [];
        var materialIndex = 1;
        this.materials.forEach(e => {
          var material = materialTemplate;
          material = material.replace(
            MaterialTemplateKey.OrderNumber,
            materialIndex
          );
          material = material.replace(MaterialTemplateKey.OrderName, e.name);
          material = material.replace(MaterialTemplateKey.OrderCount, e.count);
          material = material.replace(MaterialTemplateKey.PriceUA, e.ua);
          material = material.replace(MaterialTemplateKey.PriceUSD, e.usd);
          material = material.replace(MaterialTemplateKey.PriceEURO, e.euro);
          materialsResult.push(material);
          materialIndex++;
        });
        html = html.replace(PrintKey.Materials, materialsResult.join(""));

        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        var doc = iframe.contentDocument;
        doc.open();
        doc.write(html);
        doc.close();

        iframe.contentWindow.print();
        document.body.removeChild(iframe);
      });
    },
    addWork() {
      this.works.push({
        name: this.workName,
        ua: this.workUA,
        usd: this.workUSD,
        euro: this.workEURO
      });
      this.workName = "";
      this.workUA = 0;
      this.workUSD = 0;
      this.workEURO = 0;
    },
    workResult() {
      var result = "СУМА: ";
      var ua = 0.0;
      var usd = 0.0;
      var euro = 0.0;

      this.works.forEach(e => {
        if (e.ua != 0) ua += Number(e.ua);
        if (e.usd != 0) usd += Number(e.usd);
        if (e.euro != 0) euro += Number(e.euro);
      });

      if (ua != 0) result += ua + "грн. ";
      if (usd != 0) result += usd + "дол. США. ";
      if (euro != 0) result += euro + "Євро. ";

      return result;
    },
    materialResult() {
      var result = "СУМА: ";
      var ua = 0.0;
      var usd = 0.0;
      var euro = 0.0;

      this.materials.forEach(e => {
        if (e.ua != 0) ua += Number(e.ua);
        if (e.usd != 0) usd += Number(e.usd);
        if (e.euro != 0) euro += Number(e.euro);
      });

      if (ua != 0) result += ua + "грн. ";
      if (usd != 0) result += usd + "дол. США. ";
      if (euro != 0) result += euro + "Євро. ";

      return result;
    },
    deleteSelectedWorks() {
      this.selectedWork.forEach(element => {
        var i = this.works.indexOf(element);
        if (i != -1) {
          this.works.splice(i, 1);
        }
      });
    },
    deleteSelectedMaterials() {
      this.selectedMaterials.forEach(element => {
        var i = this.materials.indexOf(element);
        if (i != -1) {
          this.materials.splice(i, 1);
        }
      });
    },
    addMaterial() {
      this.materials.push({
        name: this.materialName,
        count: this.materialCount,
        ua: this.materialUA,
        usd: this.materialUSD,
        euro: this.materialEURO
      });
      this.materialName = "";
      this.materialCount = 0;
      this.materialUA = 0;
      this.materialUSD = 0;
      this.materialEURO = 0;
    },
    onSelectWorks(items) {
      this.selectedWork = items;
    },
    onSelectMaterials(items) {
      this.selectedMaterials = items;
    },
    getAlternateLabel(count) {
      let plural = "";

      if (count > 1) {
        plural = "s";
      }

      return `${count}${plural}`;
    }
  }
};
</script>

<style scoped>
.header-title {
  display: block;
  padding-left: 10;
  margin-left: 10;
}

.input-border {
  border: gray;
  /* border-style: solid; */
  border-width: 1px;
}

.hide-space {
  visibility: hidden;
}

.header-button-print {
}
</style>
