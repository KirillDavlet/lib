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
      d="M21.75 6.67867e-06L0 12.5574L21.75 25.1147L21.75 6.67867e-06ZM152 0.057373H22V25.0574H152V0.057373Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconArrowMacros.vue' })
export default class IconArrowMacros extends SvgIconBase {
  @Prop({ default: '0 0 152 56' }) readonly viewBox!: string;
  @Prop({ default: 'arrowMacros' }) readonly title!: string;
  @Prop({ default: 152 }) readonly width!: number;
  @Prop({ default: 26 }) readonly height!: number;
  @Prop({ default: '#232E33' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
