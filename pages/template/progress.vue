<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/progress-circular/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用indeterminate屬性，一個v-progress-circular繼續無限地進行動畫處理。
    </v-chip>
    <v-divider class="my-5"></v-divider>
    <div class="text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>

      <v-progress-circular indeterminate color="red"></v-progress-circular>

      <v-progress-circular indeterminate color="purple"></v-progress-circular>

      <v-progress-circular indeterminate color="green"></v-progress-circular>

      <v-progress-circular indeterminate color="amber"></v-progress-circular>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >size和width屬性使您可以輕鬆更改v-progress-circular組件的大小和寬度。
    </v-chip>
    <div class="text-center">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>

      <v-progress-circular
        :width="3"
        color="red"
        indeterminate
      ></v-progress-circular>

      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>

      <v-progress-circular
        :width="3"
        color="green"
        indeterminate
      ></v-progress-circular>

      <v-progress-circular
        :size="50"
        color="amber"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用indeterminate屬性，一個v-progress-circular繼續無限地進行動畫處理。
    </v-chip>
    <div class="text-center">
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="value"
        color="teal"
      >
        {{ value }}
      </v-progress-circular>

      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value"
        color="primary"
      >
        {{ value }}
      </v-progress-circular>

      <v-progress-circular
        :rotate="90"
        :size="100"
        :width="15"
        :value="value"
        color="red"
      >
        {{ value }}
      </v-progress-circular>

      <v-progress-circular
        :rotate="180"
        :size="100"
        :width="15"
        :value="value"
        color="pink"
      >
        {{ value }}
      </v-progress-circular>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用indeterminate屬性,v-progress-linear持續不斷的動畫。
    </v-chip>
    <div>
      <v-progress-linear
        indeterminate
        color="yellow darken-2"
      ></v-progress-linear>
      <br />
      <v-progress-linear indeterminate color="green"></v-progress-linear>
      <br />
      <v-progress-linear indeterminate color="teal"></v-progress-linear>
      <br />
      <v-progress-linear indeterminate color="cyan"></v-progress-linear>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5">這將在v-progress-linear的值部分上應用條紋背景 </v-chip>
    <div>
      <v-progress-linear
        color="light-blue"
        height="10"
        value="10"
        striped
      ></v-progress-linear>
      <br />
      <v-progress-linear
        color="light-green darken-4"
        height="10"
        value="20"
        striped
      ></v-progress-linear>
      <br />
      <v-progress-linear
        height="10"
        value="45"
        striped
        color="lime"
      ></v-progress-linear>
      <br />
      <v-progress-linear
        value="60"
        height="10"
        striped
        color="deep-orange"
      ></v-progress-linear>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用v-model時，v-progress-linear組件將響應用戶輸入。
    </v-chip>
    <div>
      <v-progress-linear
        v-model="power"
        color="amber"
        height="25"
      ></v-progress-linear>

      <br />

      <v-progress-linear v-model="skill" color="blue-grey" height="25">
        <template v-slot="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>

      <br />

      <v-progress-linear v-model="knowledge" height="25">
        <strong>{{ Math.ceil(knowledge) }}%</strong>
      </v-progress-linear>
    </div>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mb-5"
      >使用absolute屬性，我們可以將v-progress-linear組件定位在v-toolbar的底部。我們還使用了active屬性來控制進度的可見性。
    </v-chip>
    <v-card class="mx-auto mt-6" width="344">
      <v-system-bar>
        <v-spacer></v-spacer>
        <v-icon>mdi-square</v-icon>
        <v-icon>mdi-circle</v-icon>
        <v-icon>mdi-triangle</v-icon>
      </v-system-bar>

      <v-toolbar>
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>My Recipes</v-toolbar-title>

        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          bottom
          color="deep-purple accent-4"
        ></v-progress-linear>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container style="height: 282px;">
        <v-row class="fill-height" align="center" justify="center">
          <v-scale-transition>
            <div v-if="!loading" class="text-center">
              <v-btn color="primary" @click="loading = true"
                >Start loading</v-btn
              >
            </div>
          </v-scale-transition>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";

@Component({ components: {} })
export default class ProgressTempalte extends Vue {
  @Watch("loading")
  loadingChange(val: boolean) {
    if (!val) return;

    setTimeout(() => (this.loading = false), 3000);
  }

  interval: any = {};
  value = 0;

  loading = false;

  skill = 20;
  knowledge = 33;
  power = 78;

  beforeDestroy() {
    clearInterval(this.interval);
  }
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  }
}
</script>
