<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 17L21 12L16 7"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 12H9"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconExit.vue' })
export default class IconExit extends SvgIconBase {
  @Prop({ default: 'exit' }) readonly title!: string;
  @Prop({ default: '#c3d6e0' }) readonly color!: string;
  @Prop({ default: 2 }) readonly strokeWidth!: number;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
