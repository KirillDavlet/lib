<template>
  <div class="info-banner" :class="clas ? clas : ``">
    <div class="info-banner_icon">
      <div class="icon icon_info"></div>
    </div>
    <div class="info-banner_inner">
      {{ text ? text : `` }}
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class FeedPlate extends Vue {
  @Prop() private text!: string;
  @Prop() private clas!: string;
}
</script>
