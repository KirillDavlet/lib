<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M13.6001 9.59981C14.9281 9.59981 15.9921 8.5278 15.9921 7.1998C15.9921 5.8718 14.9281 4.7998 13.6001 4.7998C12.2721 4.7998 11.2001 5.8718 11.2001 7.1998C11.2001 8.5278 12.2721 9.59981 13.6001 9.59981ZM7.2001 9.59981C8.5281 9.59981 9.5921 8.5278 9.5921 7.1998C9.5921 5.8718 8.5281 4.7998 7.2001 4.7998C5.8721 4.7998 4.8001 5.8718 4.8001 7.1998C4.8001 8.5278 5.8721 9.59981 7.2001 9.59981ZM7.2001 11.1998C5.3361 11.1998 1.6001 12.1358 1.6001 13.9998V15.9998H12.8001V13.9998C12.8001 12.1358 9.0641 11.1998 7.2001 11.1998ZM13.6001 11.1998C13.3681 11.1998 13.1041 11.2158 12.8241 11.2398C13.7521 11.9118 14.4001 12.8158 14.4001 13.9998V15.9998H19.2001V13.9998C19.2001 12.1358 15.4641 11.1998 13.6001 11.1998Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconPeople.vue' })
export default class IconPeople extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'people' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
