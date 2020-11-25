<template>
  <v-container>
    <div ref="chart1" class="chart"></div>

    <v-divider class="py-10"></v-divider>

    <div ref="chart2" class="chart"></div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import echarts, { EChartOption } from "echarts";

@Component({ components: {} })
export default class ECharts extends Vue {
  option1: EChartOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
        ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
        ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
        ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
        ["Walnut Brownie", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
      ]
    },
    series: [
      {
        type: "pie",
        radius: 60,
        center: ["25%", "30%"]
        // No encode specified, by default, it is '2012'.
      },
      {
        type: "pie",
        radius: 60,
        center: ["75%", "30%"],
        encode: {
          itemName: "product",
          value: "2013"
        }
      },
      {
        type: "pie",
        radius: 60,
        center: ["25%", "75%"],
        encode: {
          itemName: "product",
          value: "2014"
        }
      },
      {
        type: "pie",
        radius: 60,
        center: ["75%", "75%"],
        encode: {
          itemName: "product",
          value: "2015"
        }
      }
    ]
  };
  option2: EChartOption = {
    title: {
      text: "某地区蒸发量和降水量",
      subtext: "纯属虚构"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["蒸发量", "降水量"]
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },

    xAxis: [
      {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "蒸发量",
        type: "bar",
        data: [
          2.0,
          4.9,
          7.0,
          23.2,
          25.6,
          76.7,
          135.6,
          162.2,
          32.6,
          20.0,
          6.4,
          3.3
        ],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "降水量",
        type: "bar",
        data: [
          2.6,
          5.9,
          9.0,
          26.4,
          28.7,
          70.7,
          175.6,
          182.2,
          48.7,
          18.8,
          6.0,
          2.3
        ],

        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      }
    ]
  };

  mounted() {
    const chart1 = echarts.init(this.$refs.chart1 as HTMLCanvasElement);
    chart1.setOption(this.option1);

    const chart2 = echarts.init(this.$refs.chart2 as HTMLCanvasElement);
    chart2.setOption(this.option2);
  }
}
</script>

<style lang="sass">

.chart
  width: 800px
  height: 500px
</style>
