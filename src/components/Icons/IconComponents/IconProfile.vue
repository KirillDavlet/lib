<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M15.8333 2.49967H15V0.833008H13.3333V2.49967H6.66667V0.833008H5V2.49967H4.16667C3.24167 2.49967 2.5 3.24967 2.5 4.16634V15.833C2.5 16.7497 3.24167 17.4997 4.16667 17.4997H15.8333C16.75 17.4997 17.5 16.7497 17.5 15.833V4.16634C17.5 3.24967 16.75 2.49967 15.8333 2.49967ZM10 4.99967C11.3833 4.99967 12.5 6.11634 12.5 7.49967C12.5 8.88301 11.3833 9.99967 10 9.99967C8.61667 9.99967 7.5 8.88301 7.5 7.49967C7.5 6.11634 8.61667 4.99967 10 4.99967ZM15 14.9997H5V14.1663C5 12.4997 8.33333 11.583 10 11.583C11.6667 11.583 15 12.4997 15 14.1663V14.9997Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconProfile.vue' })
export default class IconProfile extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'profile' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
