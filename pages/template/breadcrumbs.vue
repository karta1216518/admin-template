<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/breadcrumbs/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >默認情況下，麵包屑使用文本分隔符。它可以是任何字符串。</v-chip
    >

    <v-breadcrumbs :items="items"></v-breadcrumbs>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >對於圖標變體，麵包屑可以使aterial Design Icons中的任何圖標。</v-chip
    >

    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">您可以使用item插槽自定義每個麵包屑。</v-chip>
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class BreadcrumbsTemplate extends Vue {
  items = [
    {
      text: "Dashboard",
      disabled: false,
      href: "breadcrumbs_dashboard"
    },
    {
      text: "Link 1",
      disabled: false,
      href: "breadcrumbs_link_1"
    },
    {
      text: "Link 2",
      disabled: true,
      href: "breadcrumbs_link_2"
    }
  ];
}
</script>
