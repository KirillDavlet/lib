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
      d="M7.81073 1.4937C6.85635 1.23148 5.85441 1.19256 4.88257 1.37996L12.9714 9.4143C13.1574 8.45618 13.1204 7.4681 12.8633 6.52656C12.7947 6.2737 8.04761 1.55668 7.81073 1.4937Z"
      v-bind="pathAttrs"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.0127 12.3406C4.01682 14.3315 6.9149 14.841 9.26118 13.8465L0.498329 5.1438C-0.504672 7.47223 0.00951874 10.3506 2.0127 12.3406Z"
      v-bind="pathAttrs"
    />
    <path
      d="M1.20618 3.96971C1.40358 3.68676 1.62167 3.41322 1.87641 3.16035C2.37627 2.66723 2.96299 2.27077 3.60698 1.99097L12.4338 10.7595C12.1493 11.3994 11.7501 11.9817 11.2559 12.4778C11.005 12.7234 10.7322 12.9455 10.4409 13.1415L1.20618 3.96971Z"
      v-bind="pathAttrs"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.40594 2.06614L12.9235 5.61565L14.3815 4.1464L10.862 0.595947L9.40594 2.06614Z"
      v-bind="pathAttrs"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.245 0C12.4478 0 11.7795 0.545211 11.5689 1.28595L12.131 1.84338C12.1292 1.82176 12.1235 1.80202 12.1235 1.7804C12.1222 1.63195 12.1501 1.48469 12.2058 1.34706C12.2614 1.20944 12.3437 1.08416 12.4479 0.978398C12.5521 0.872641 12.6761 0.788489 12.8129 0.730768C12.9497 0.673047 13.0965 0.642893 13.245 0.642033C13.3934 0.642893 13.5402 0.673047 13.677 0.730768C13.8138 0.788489 13.9378 0.872641 14.042 0.978398C14.1462 1.08416 14.2285 1.20944 14.2841 1.34706C14.3398 1.48469 14.3678 1.63195 14.3664 1.7804C14.3664 2.40833 13.8654 2.91782 13.245 2.91782C13.2318 2.91782 13.2215 2.91406 13.2064 2.91312L13.7667 3.47055C14.1251 3.35603 14.4378 3.13044 14.6595 2.82642C14.8812 2.52241 15.0005 2.15573 15 1.77946C15 0.798076 14.2122 0 13.245 0Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconNyBall.vue' })
export default class IconNyBall extends SvgIconBase {
  @Prop({ default: '0 0 15 15' }) readonly viewBox!: string;
  @Prop({ default: 'nyBall' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
