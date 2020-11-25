<template>
  <v-container>
    <a
      target="_block"
      href="https://v2.vuetifyjs.com/zh-Hans/components/text-fields/"
      >中文文檔</a
    >
    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5">文本框可以是disabled或readonly。</v-chip>
    <TDisabledInput></TDisabledInput>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5">使用dense屬性降低文本字段的高度。</v-chip>
    <TDenseInput></TDenseInput>
    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5"
      >密碼輸入可以用附加圖標以及回調一起控制密碼的可見性。</v-chip
    >
    <TPasswordInput></TPasswordInput>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5"
      >你可以將文本框的顏色更改為Material design
      調色板中的任何顏色。下面是帶驗證的自定義表單的示例實現。</v-chip
    >

    <TCostomInput></TCostomInput>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5"
      >在文本框組件使用hint來設置將提示的文本添加到文本字段下。使用persistent-hint保持提示文本在文本字段未被聚焦時保持可見性。</v-chip
    >
    <THintInput></THintInput>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5"
      >prefix和suffix屬性允許你在文本字段旁添加一段不可修改的文本。</v-chip
    >
    <TPrefixInput></TPrefixInput>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5"
      >click:prepend, click:append,
      click:append-outer,和click:clear將在單擊相應的圖標時發出。請注意，如果使用插槽，則不會觸發這些事件。</v-chip
    >
    <TIconEventInput></TIconEventInput>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5">自訂義標籤</v-chip>
    <TLabelInput></TLabelInput>

    <v-divider class="my-5"></v-divider>
    <v-chip class="mt-5"
      >v-textarea 最簡單的形式是多行文本字段，可用於大量文本。
    </v-chip>
    <v-chip class="mt-5"
      >使用auto-grow屬性時，當包含的文本超過其大小時，多行文本框的大小將自動增加。</v-chip
    >
    <TInputArea></TInputArea>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import TPasswordInput from "@/components/templates/TPasswordInput.vue";
import TDenseInput from "@/components/templates/TDenseInput.vue";
import TDisabledInput from "@/components/templates/TDisabledInput.vue";
import TCostomInput from "@/components/templates/TCostomInput.vue";
import THintInput from "@/components/templates/THintInput.vue";
import TPrefixInput from "@/components/templates/TPrefixInput.vue";
import TIconEventInput from "@/components/templates/TIconEventInput.vue";
import TLabelInput from "@/components/templates/TLabelInput.vue";
import TInputArea from "@/components/templates/TInputArea.vue";

@Component({
  components: {
    TPasswordInput,
    TDenseInput,
    TDisabledInput,
    TCostomInput,
    THintInput,
    TPrefixInput,
    TIconEventInput,
    TLabelInput,
    TInputArea
  }
})
export default class InputsTemplate extends Vue {}
</script>
