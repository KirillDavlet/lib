<template>
  <v-popover
    class="app-faq-popover"
    :content="text"
    :open.sync="show"
    :autoHide="true"
    trigger="manual"
    popoverClass="popover-faq"
    placement="bottom-start"
  >
    <div class="icon icon_question" @click="show = !show" />
    <div slot="popover" class="faq-inner">
      <div class="text">
        {{ text }}
      </div>
      <div
        class="icon icon_close notification_close-btn"
        @click="show = false"
      ></div>
    </div>
  </v-popover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VPopover } from 'v-tooltip';

@Component({
  components: {
    'v-popover': VPopover
  }
})
export default class Faq extends Vue {
  public show: boolean = false;

  public created() {}

  get text() {
    return this.$slots.default ? this.$slots.default[0].text : '';
  }
}
</script>
