<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M12.5 4C7.80588 4 4 7.80588 4 12.5C4 17.1941 7.80588 21 12.5 21C17.1941 21 21 17.1941 21 12.5C21 7.80588 17.1941 4 12.5 4ZM17.4583 13.9167H11.7917V7.54167H13.2083V12.5H17.4583V13.9167Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconClock.vue' })
export default class IconClock extends SvgIconBase {
  @Prop({ default: 'clock' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
