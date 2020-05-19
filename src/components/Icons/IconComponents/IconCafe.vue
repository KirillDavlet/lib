<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M16.8 4H3.99995V5.6H16.8V4ZM17.6 12V10.4L16.8 6.4H3.99995L3.19995 10.4V12H3.99995V16.8H12V12H15.2V16.8H16.8V12H17.6ZM10.4 15.2H5.59995V12H10.4V15.2Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconCafe.vue' })
export default class IconCafe extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'cafe' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
