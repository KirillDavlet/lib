<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
      v-bind="pathAttrs"
    />
    <rect x="7" y="7" width="10" height="10" v-bind="pathAttrs" />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconCheckboxIndeterminate.vue' })
export default class IconCheckboxIndeterminate extends SvgIconBase {
  @Prop({ default: 'checkboxIndeterminate' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
