<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M10.3999 2.40039C5.9839 2.40039 2.3999 5.98439 2.3999 10.4004C2.3999 14.8164 5.9839 18.4004 10.3999 18.4004C14.8159 18.4004 18.3999 14.8164 18.3999 10.4004C18.3999 5.98439 14.8159 2.40039 10.3999 2.40039ZM11.1999 14.4004H9.5999V9.60039H11.1999V14.4004ZM11.1999 8.00039H9.5999V6.40039H11.1999V8.00039Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconInfoSolid.vue' })
export default class IconInfoSolid extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'info-solid' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
