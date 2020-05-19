<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M21.6797 19.3359H4.88281V4.10156C4.88281 3.99414 4.79492 3.90625 4.6875 3.90625H3.32031C3.21289 3.90625 3.125 3.99414 3.125 4.10156V20.8984C3.125 21.0059 3.21289 21.0938 3.32031 21.0938H21.6797C21.7871 21.0938 21.875 21.0059 21.875 20.8984V19.5312C21.875 19.4238 21.7871 19.3359 21.6797 19.3359ZM7.46582 15.5688C7.5415 15.6445 7.66357 15.6445 7.7417 15.5688L11.1182 12.2095L14.2334 15.3442C14.3091 15.4199 14.4336 15.4199 14.5093 15.3442L21.2329 8.62305C21.3086 8.54736 21.3086 8.42285 21.2329 8.34717L20.2661 7.38037C20.2294 7.34402 20.1798 7.32363 20.1282 7.32363C20.0765 7.32363 20.0269 7.34402 19.9902 7.38037L14.375 12.9932L11.2646 9.86328C11.2279 9.82693 11.1784 9.80654 11.1267 9.80654C11.075 9.80654 11.0255 9.82693 10.9888 9.86328L6.50146 14.3237C6.46512 14.3604 6.44473 14.41 6.44473 14.4617C6.44473 14.5133 6.46512 14.5629 6.50146 14.5996L7.46582 15.5688Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconChart.vue' })
export default class IconChart extends SvgIconBase {
  @Prop({ default: '0 0 25 25' }) readonly viewBox!: string;
  @Prop({ default: 'chart' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
