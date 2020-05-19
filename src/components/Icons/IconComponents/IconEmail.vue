<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M12 0.0200195C5.373 0.0200195 0 5.39302 0 12.02C0 18.647 5.373 24.02 12 24.02C18.627 24.02 24 18.647 24 12.02C24 5.39302 18.627 0.0200195 12 0.0200195ZM18.99 7.00002L12 12.666L5.009 7.00002H18.99ZM19 17H5V8.49502L12 14.168L19 8.49602V17Z"
        v-bind="pathAttrs"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconEmail' })
export default class IconEmail extends SvgIconBase {
  public isHover: boolean = false;

  @Prop({ default: 'email' }) readonly title!: string;
}
</script>

<style lang="sass"></style>
