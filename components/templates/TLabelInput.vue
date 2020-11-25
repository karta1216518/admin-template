<template>
  <v-form>
    <v-container>
      <v-text-field>
        <template v-slot:label>
          What about <strong>icon</strong> here?
          <v-icon style="vertical-align: middle">mdi-ghost</v-icon>
        </template>
      </v-text-field>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class TLabelInput extends Vue {}
</script>

<style lang="sass"></style>
