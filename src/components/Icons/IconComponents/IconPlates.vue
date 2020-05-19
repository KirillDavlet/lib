<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M3.33325 9.16699H7.49992V4.16699H3.33325V9.16699ZM3.33325 15.0003H7.49992V10.0003H3.33325V15.0003ZM8.33325 15.0003H12.4999V10.0003H8.33325V15.0003ZM13.3333 15.0003H17.4999V10.0003H13.3333V15.0003ZM8.33325 9.16699H12.4999V4.16699H8.33325V9.16699ZM13.3333 4.16699V9.16699H17.4999V4.16699H13.3333Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconPlates.vue' })
export default class IconPlates extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'plates' }) readonly title!: string;
  @Prop({ default: '#5A81EA' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
