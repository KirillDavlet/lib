<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM7.5 14.1667H5.83333V8.33333H7.5V14.1667ZM10.8333 14.1667H9.16667V5.83333H10.8333V14.1667ZM14.1667 14.1667H12.5V10.8333H14.1667V14.1667Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconCap' })
export default class IconCap extends SvgIconBase {
  @Prop({ default: '0 0 20 20' }) readonly viewBox!: string;
  @Prop({ default: 'cap' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
