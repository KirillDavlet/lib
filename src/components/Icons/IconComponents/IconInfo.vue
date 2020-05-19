<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM13 18H11V10H13V18ZM12 5.75C12.69 5.75 13.25 6.31 13.25 7C13.25 7.69 12.69 8.25 12 8.25C11.31 8.25 10.75 7.69 10.75 7C10.75 6.31 11.31 5.75 12 5.75Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconInfo.vue' })
export default class IconInfo extends SvgIconBase {
  @Prop({ default: 'info' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
