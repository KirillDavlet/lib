<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M2.67692 11.858V17.2468C2.67692 17.5781 3.00513 17.8571 3.39487 17.8571H16.6051C16.9949 17.8571 17.3231 17.5781 17.3231 17.2468V11.858C17.6923 11.8406 18 11.579 18 11.2477V8.31787C18 7.98652 17.6718 7.7075 17.2821 7.7075H16.6051H13.8154C15.2923 7.09712 15.9692 6.13796 16.0718 5.266C16.1949 4.18476 15.4564 3.26048 14.2667 3.05121C12.0718 2.65011 10.5744 4.6905 9.77436 6.19028C9.0359 4.88233 7.74359 3.26048 5.85641 3.59183C4.76923 3.78366 4.11282 4.62075 4.2359 5.59734C4.31795 6.34723 4.89231 7.16688 6.08205 7.72493H3.39487H2.71795C2.32821 7.72493 2 8.00396 2 8.33531V11.2651C2 11.579 2.30769 11.8406 2.67692 11.858ZM16.2974 8.57946H16.9744V11.0035H16.2974H3.70256H3.02564V8.57946H3.70256H16.2974Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';
@Component({ name: 'IconNyBox.vue' })
export default class IconNyBox extends SvgIconBase {
  @Prop({ default: '0 0 20 20' }) readonly viewBox!: string;
  @Prop({ default: 'nyBox' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
