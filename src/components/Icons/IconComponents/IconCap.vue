<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 8H18V17C18 18.0609 17.5522 19.0783 16.7552 19.8284C15.9582 20.5786 14.8772 21 13.75 21H5.25C4.12283 21 3.04183 20.5786 2.2448 19.8284C1.44777 19.0783 1 18.0609 1 17V8Z"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 1V4"
      v-bind="pathAttrs"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 1V4"
      v-bind="pathAttrs"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 1V4"
      v-bind="pathAttrs"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconCap.vue' })
export default class IconCap extends SvgIconBase {
  @Prop({ default: 'cap' }) readonly title!: string;
  @Prop({ default: 2 }) readonly strokeWidth!: number;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
