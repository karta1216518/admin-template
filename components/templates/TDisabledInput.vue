<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Regular"
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Regular"
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Solo"
            solo
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Solo"
            solo
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Filled"
            filled
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Filled"
            filled
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Outlined"
            outlined
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            value="John Doe"
            label="Outlined"
            outlined
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class TDenseInput extends Vue {}
</script>

<style lang="sass"></style>
