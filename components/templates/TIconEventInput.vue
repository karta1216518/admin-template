<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="message"
            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
            :prepend-icon="icon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ components: {} })
export default class TIconEventInput extends Vue {
  password = "Password";
  show = false;
  message = "Hey!";
  marker = true;
  iconIndex = 0;
  icons = [
    "mdi-emoticon",
    "mdi-emoticon-cool",
    "mdi-emoticon-dead",
    "mdi-emoticon-excited",
    "mdi-emoticon-happy",
    "mdi-emoticon-neutral",
    "mdi-emoticon-sad",
    "mdi-emoticon-tongue"
  ];

  get icon(): string {
    return this.icons[this.iconIndex];
  }

  toggleMarker(): void {
    this.marker = !this.marker;
  }
  sendMessage(): void {
    this.resetIcon();
    this.clearMessage();
  }
  clearMessage(): void {
    this.message = "";
  }
  resetIcon(): void {
    this.iconIndex = 0;
  }
  changeIcon(): void {
    this.iconIndex === this.icons.length - 1
      ? (this.iconIndex = 0)
      : this.iconIndex++;
  }
}
</script>

<style lang="sass"></style>
