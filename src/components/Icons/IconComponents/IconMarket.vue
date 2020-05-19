<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M17.8417 9.64999L10.3417 2.14999C10.0417 1.84999 9.62508 1.66666 9.16675 1.66666H3.33341C2.41675 1.66666 1.66675 2.41666 1.66675 3.33332V9.16666C1.66675 9.62499 1.85008 10.0417 2.15841 10.35L9.65842 17.85C9.95842 18.15 10.3751 18.3333 10.8334 18.3333C11.2917 18.3333 11.7084 18.15 12.0084 17.8417L17.8417 12.0083C18.1501 11.7083 18.3334 11.2917 18.3334 10.8333C18.3334 10.375 18.1417 9.94999 17.8417 9.64999ZM4.58341 5.83332C3.89175 5.83332 3.33341 5.27499 3.33341 4.58332C3.33341 3.89166 3.89175 3.33332 4.58341 3.33332C5.27508 3.33332 5.83341 3.89166 5.83341 4.58332C5.83341 5.27499 5.27508 5.83332 4.58341 5.83332ZM14.3917 12.725L10.8334 16.2833L7.27508 12.725C6.90008 12.3417 6.66675 11.825 6.66675 11.25C6.66675 10.1 7.60008 9.16666 8.75008 9.16666C9.32508 9.16666 9.85008 9.39999 10.2251 9.78332L10.8334 10.3833L11.4417 9.77499C11.8167 9.39999 12.3417 9.16666 12.9167 9.16666C14.0667 9.16666 15.0001 10.1 15.0001 11.25C15.0001 11.825 14.7667 12.35 14.3917 12.725Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconMarket.vue' })
export default class IconMarket extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'diag' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
