<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M4.99 9.28714L1 13.4786L4.99 17.67V14.5264H12V12.4307H4.99V9.28714ZM19 7.19143L15.01 3V6.14357H8V8.23929H15.01V11.3829L19 7.19143Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconArrows.vue' })
export default class IconArrows extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'arrows' }) readonly title!: string;
  @Prop({ default: '#5A81EA' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
