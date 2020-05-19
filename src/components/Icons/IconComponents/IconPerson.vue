<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconPerson.vue' })
export default class IconPerson extends SvgIconBase {
  @Prop({ default: '0 0 25 25' }) readonly viewBox!: string;
  @Prop({ default: 'person' }) readonly title!: string;
  @Prop({ default: '#546E7A' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
