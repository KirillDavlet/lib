<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5585 0.560908C12.1246 0.57672 11.6406 0.921932 11.2427 0.700575C9.326 -0.364051 5.74149 0.258377 4.45349 1.54648C3.5 2.50002 3.18428 3.00216 2.5 4.00003C1.56801 5.36067 0.820415 6.9267 0.876633 8.91804C0.903864 9.88516 2.22323 9.55225 2.9075 9.54873C5.18578 9.5401 7.46407 9.53512 9.74236 9.5338C12.3064 9.5338 11.0652 8.36816 10.7587 6.83886C10.6129 6.10364 10.1526 5.12509 9.89081 4.4496C9.56932 3.62566 8.44233 1.77925 9.73446 1.52891C11.5238 1.18106 9.91277 2.7982 12.5612 3.44119C13.3342 3.62829 14 2.79205 14 1.99446C13.9987 1.697 13.9064 1.40706 13.7356 1.16353C13.5648 0.920008 13.3235 0.734556 13.0443 0.632059C12.8886 0.57651 12.7236 0.552328 12.5585 0.560908Z"
      v-bind="pathAttrs"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2028 12.8392C12.2028 13.4717 11.6547 13.9838 10.9818 13.9838H1.2201C0.547246 13.9838 0 13.4717 0 12.8392V11.6946C0 11.0631 0.547246 10.551 1.2201 10.551H10.9818C11.6547 10.551 12.2028 11.0631 12.2028 11.6946V12.8392Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconNyCap.vue' })
export default class IconNyCap extends SvgIconBase {
  @Prop({ default: '0 0 14 14 ' }) readonly viewBox!: string;
  @Prop({ default: 'nyCap' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
