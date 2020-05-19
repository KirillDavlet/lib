<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M21.0888 10.498V7.69798H24V5.59884H21.0888V2.79884H18.9072V5.59884H15.9972V7.69798H18.9072V10.498H21.0888ZM7.2744 2.72251C8.63625 2.72251 9.55336 3.28228 10.075 3.75878L12.1448 1.82734C10.8852 0.693928 9.24205 3.19739e-07 7.2744 3.19739e-07C3.26218 -0.00115623 0 3.1354 0 6.99942C0 10.8634 3.26218 14 7.2744 14C11.4729 14 14.2603 11.1584 14.2603 7.16134C14.2603 6.5796 14.1834 6.16671 14.0764 5.72722H7.2708V8.33639H11.2758C11.0859 9.43627 10.0606 11.2925 7.2744 11.2925C4.86683 11.2925 2.90279 9.36687 2.90279 7.00868C2.90279 4.64701 4.86683 2.72251 7.2744 2.72251Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconGPlus.vue' })
export default class IconGPlus extends SvgIconBase {
  @Prop({ default: 'GPlus' }) readonly title!: string;
  @Prop({ default: '0 0 24 14' }) readonly viewBox!: string;
  @Prop({ default: '#C3D6E0' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
