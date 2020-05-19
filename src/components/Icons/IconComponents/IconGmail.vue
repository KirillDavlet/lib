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
      d="M19 24H5C2.239 24 0 21.761 0 19V5C0 2.239 2.239 0 5 0H19C21.762 0 24 2.239 24 5V19C24 21.761 21.762 24 19 24ZM18.859 17.667C19.489 17.667 20 17.155 20 16.525V7.475C20 6.845 19.489 6.333 18.859 6.333H5.141C4.511 6.333 4 6.845 4 7.475V16.525C4 17.155 4.511 17.667 5.141 17.667H18.859ZM12 13.609L5.772 9.288L5.758 17H18.215V9.288L12 13.609ZM17.913 7C16.168 8.215 12 11.153 12 11.153L6.053 7H17.913Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconGmail.vue' })
export default class IconGmail extends SvgIconBase {
  @Prop({ default: 'gmail' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
