<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path d="M0 0L5 5L10 0L0 0Z" v-bind="pathAttrs" />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconSelectArrow.vue' })
export default class IconSelectArrow extends SvgIconBase {
  @Prop({ default: '0 0 10 5 ' }) readonly viewBox!: string;
  @Prop({ default: 'selectArrow' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
