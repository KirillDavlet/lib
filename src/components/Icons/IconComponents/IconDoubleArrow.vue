<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M13 19L20 12L13 5"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.80078 19L10.8008 12L3.80078 5"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconDoubleArrow.vue' })
export default class IconDoubleArrow extends SvgIconBase {
  @Prop({ default: 'doubleArrow' }) readonly title!: string;
  @Prop({ default: 2 }) readonly strokeWidth!: number;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
