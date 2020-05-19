<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM10.6667 13.298V14H10V13.3347C9.31 13.3227 8.596 13.158 8 12.85L8.30333 11.754C8.94067 12.0013 9.78933 12.264 10.4533 12.114C11.2193 11.9407 11.376 11.1527 10.5293 10.7733C9.90867 10.484 8.01067 10.2367 8.01067 8.61133C8.01067 7.70267 8.70333 6.88933 10 6.71133V6H10.6667V6.67867C11.1493 6.69133 11.6907 6.77533 12.2947 6.95867L12.0533 8.05667C11.5413 7.87667 10.9753 7.71333 10.4247 7.74667C9.432 7.80467 9.34467 8.664 10.0373 9.024C11.1787 9.56067 12.6667 9.95867 12.6667 11.3887C12.668 12.534 11.7713 13.1433 10.6667 13.298Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconMoney.vue' })
export default class IconMoney extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'money' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
