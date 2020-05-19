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
      d="M24 17.981H11L4 23.001V17.981H0V1H24V17.981ZM13 8.001H11V14.001H13V8.001ZM12 6.501C12.69 6.501 13.25 5.941 13.25 5.251C13.25 4.561 12.69 4.001 12 4.001C11.31 4.001 10.75 4.561 10.75 5.251C10.75 5.941 11.31 6.501 12 6.501Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconTooltip.vue' })
export default class IconTooltip extends SvgIconBase {
  @Prop({ default: 'tooltip' }) readonly title!: string;
  @Prop({ default: 0 }) readonly strokeWidth!: number;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
