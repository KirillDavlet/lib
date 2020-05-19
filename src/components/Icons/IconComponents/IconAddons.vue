<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M2.5 14.1667H17.5V15.8333H2.5V14.1667ZM2.5 8.33333H17.5V12.5H2.5V8.33333ZM2.5 5H17.5V6.66667H2.5V5Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconCap' })
export default class IconCap extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'cap' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
