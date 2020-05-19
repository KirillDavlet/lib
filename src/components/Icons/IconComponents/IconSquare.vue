<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M2.85714 12.8571H0V20H7.14286V17.1429H2.85714V12.8571ZM0 7.14286H2.85714V2.85714H7.14286V0H0V7.14286ZM17.1429 17.1429H12.8571V20H20V12.8571H17.1429V17.1429ZM12.8571 0V2.85714H17.1429V7.14286H20V0H12.8571Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'iconProfile' })
export default class IconProfile extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'square' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
