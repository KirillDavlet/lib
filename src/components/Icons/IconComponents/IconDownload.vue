<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M13 11H18L9 21L0 11H5V0H13V11ZM14 22H4V24H14V22Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconDownload.vue' })
export default class IconDownload extends SvgIconBase {
  @Prop({ default: '0 0 18 24 ' }) readonly viewBox!: string;
  @Prop({ default: 'download' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
