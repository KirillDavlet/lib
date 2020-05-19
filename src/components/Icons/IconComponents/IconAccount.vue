<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667ZM12.5 7.5C12.5 8.88333 11.3833 10 10 10C8.61667 10 7.5 8.88333 7.5 7.5C7.5 6.11667 8.61667 5 10 5C11.3833 5 12.5 6.11667 12.5 7.5ZM5 14.1667C5 12.5 8.33333 11.5833 10 11.5833C11.6667 11.5833 15 12.5 15 14.1667V15H5V14.1667Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconAccount.vue' })
export default class IconAccount extends SvgIconBase {
  @Prop({ default: '0 0 20 20' }) readonly viewBox!: string;
  @Prop({ default: 'account' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
