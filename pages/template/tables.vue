<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/data-tables/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用multi-sort屬性將使您可以同時對多個列進行排序。啟用後，您可以將數組傳遞給sort-by和sort-desc
    </v-chip>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :sort-by="['calories', 'fat']"
      :sort-desc="[false, true]"
      multi-sort
      class="elevation-1"
    ></v-data-table>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >您可以使用loading屬性來表示表中的數據正在加載中。如果表中沒有數據，也會顯示加載消息。
    </v-chip>
    <v-data-table
      item-key="name"
      class="elevation-1"
      loading
      loading-text="Loading... Please wait"
    ></v-data-table>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >show-expand屬性將在每個默認行上呈現一個展開圖標。您可以使用item.data-table-expand插槽自定義。
    </v-chip>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Expandable Table</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-switch
            v-model="singleExpand"
            label="Single expand"
            class="mt-2"
          ></v-switch>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
      </template>
    </v-data-table>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >您可以使用動態插槽item.(name)僅自定義某些列。(name)是發送到headers的相應標題項中value屬性的名稱。
    </v-chip>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:[`item.calories`]="{ item }">
        <v-chip :color="getColor(item.calories)" dark>{{
          item.calories
        }}</v-chip>
      </template>
    </v-data-table>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用multi-sort屬性將使您可以同時對多個列進行排序。啟用後，您可以將數組傳遞給sort-by和sort-desc
    </v-chip>
    <div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="+pageCount || 1"></v-pagination>
        <v-text-field
          :value="itemsPerPage"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          @input="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </div>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >您可以用total-visible属性手动设置可见页面按钮的最大数量。
    </v-chip>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">circle 属性为您提供了分页按钮的另一种样式。 </v-chip>
    <div class="text-center">
      <v-pagination v-model="page" :length="4" circle></v-pagination>

      <v-divider class="my-5"></v-divider>
      <v-chip class="mb-5"
        >上一页和下一页的图标可以使用 prev-icon 和 next-icon 属性定制。
      </v-chip>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class TablesTemplate extends Vue {
  headers = [
    {
      text: "Dessert (100g serving)",
      align: "start",
      sortable: false,
      value: "name"
    },
    { text: "Calories", value: "calories" },
    { text: "Fat (g)", value: "fat" },
    { text: "Carbs (g)", value: "carbs" },
    { text: "Protein (g)", value: "protein" },
    { text: "Iron (%)", value: "iron" }
  ];
  desserts = [
    {
      name: "Frozen Yogurt",
      calories: 200,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: "1%"
    },
    {
      name: "Ice cream sandwich",
      calories: 200,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: "1%"
    },
    {
      name: "Eclair",
      calories: 300,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: "7%"
    },
    {
      name: "Cupcake",
      calories: 300,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: "8%"
    },
    {
      name: "Gingerbread",
      calories: 400,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: "16%"
    },
    {
      name: "Jelly bean",
      calories: 400,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: "0%"
    },
    {
      name: "Lollipop",
      calories: 400,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: "2%"
    },
    {
      name: "Honeycomb",
      calories: 400,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: "45%"
    },
    {
      name: "Donut",
      calories: 500,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: "22%"
    },
    {
      name: "KitKat",
      calories: 500,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: "6%"
    }
  ];

  expanded = [];
  singleExpand = false;

  page = 1;
  pageCount = 0;
  itemsPerPage = 10;

  getColor(calories: number) {
    if (calories > 400) return "red";
    else if (calories > 200) return "orange";
    else return "green";
  }
}
</script>
