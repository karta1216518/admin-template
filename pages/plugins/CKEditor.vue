<template>
  <v-container>
    <ckeditor
      :config="editorConfig"
      :editor="editor"
      v-model="content"
    ></ckeditor>
    <v-divider class="my-10"></v-divider>
    <ckeditor
      :config="sampleEditorConfig"
      :editor="editor"
      v-model="content2"
    ></ckeditor>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import {
  editorConfig,
  sampleEditorConfig
} from "~/plugins/ckEditor/uploadAdapter";
const ClassicEditor: any = require("@ckeditor/ckeditor5-build-classic");

@Component({ components: {} })
export default class CKEditor extends Vue {
  content = "";
  content2 = "";

  editor = ClassicEditor;
  editorConfig = editorConfig;
  sampleEditorConfig = sampleEditorConfig;
}
</script>
