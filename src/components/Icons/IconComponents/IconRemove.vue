<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M22 12C22 6.47917 17.5208 2 12 2C6.47917 2 2 6.47917 2 12C2 17.5208 6.47917 22 12 22C17.5208 22 22 17.5208 22 12Z"
      v-bind="pathStroke"
      stroke-miterlimit="10"
    />
    <path
      d="M15.3334 15.3332L8.66675 8.6665"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.66675 15.3332L15.3334 8.6665"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconRemove.vue' })
export default class IconRemove extends SvgIconBase {
  @Prop({ default: 'remove' }) readonly title!: string;
  @Prop({ default: '#C3D6E0' }) readonly color!: string;
  @Prop({ default: 2 }) readonly strokeWidth!: number;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
