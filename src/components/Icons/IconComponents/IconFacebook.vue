<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M6.39703 17.9969V9.80092H9.16203L9.57303 6.59193H6.39703V4.54792C6.39703 3.62192 6.65503 2.98793 7.98403 2.98793H9.66803V0.126925C8.84867 0.0391161 8.02508 -0.00328216 7.20103 -7.49744e-05C4.75703 -7.49744e-05 3.07903 1.49193 3.07903 4.23093V6.58593H0.332031V9.79492H3.08503V17.9969H6.39703Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconFacebook.vue' })
export default class IconFacebook extends SvgIconBase {
  @Prop({ default: 'facebook' }) readonly title!: string;
  @Prop({ default: '0 0 10 18' }) readonly viewBox!: string;
  @Prop({ default: '#C3D6E0' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
