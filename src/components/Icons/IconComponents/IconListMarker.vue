<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <circle cx="4" cy="4" r="4" v-bind="pathAttrs" />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconListMarker.vue' })
export default class IconListMarker extends SvgIconBase {
  @Prop({ default: '0 0 8 8 ' }) readonly viewBox!: string;
  @Prop({ default: 'listMarker' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
