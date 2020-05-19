<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M17.3768 9L11.5789 13.58L5.78105 9L4 10.41L11.5789 16.41L19.1579 10.41L17.3768 9Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconArrow.vue' })
export default class IconArrow extends SvgIconBase {
  @Prop({ default: 'arrow' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
