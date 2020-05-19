<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <line y1="0.5" x2="20" y2="0.5" v-bind="pathAttrs" />
    <line y1="6.5" x2="20" y2="6.5" v-bind="pathAttrs" />
    <line y1="12.5" x2="20" y2="12.5" v-bind="pathAttrs" />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconBurgerLand.vue' })
export default class IconBurgerLand extends SvgIconBase {
  @Prop({ default: '0 0 20 13 ' }) readonly viewBox!: string;
  @Prop({ default: 'burgerLand' }) readonly title!: string;
  @Prop({ default: 2 }) readonly strokeWidth!: number;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
