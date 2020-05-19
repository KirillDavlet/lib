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
      d="M25 20.8324H21.875V24.9991L16.3198 20.8324H8.33333V16.6658H10.4167V18.7491H17.0135L19.7917 20.8324V18.7491H22.9167V10.4147H20.8333V8.33138H25V20.8324ZM18.75 14.5824H8.68021L3.125 18.7491V14.5824H0V-0.00195312H18.75V14.5824ZM5.20833 6.24909C5.78333 6.24909 6.25 6.71575 6.25 7.29075C6.25 7.86575 5.78333 8.33242 5.20833 8.33242C4.63333 8.33242 4.16667 7.86575 4.16667 7.29075C4.16667 6.71575 4.63333 6.24909 5.20833 6.24909ZM9.375 6.24909C9.95 6.24909 10.4167 6.71575 10.4167 7.29075C10.4167 7.86575 9.95 8.33242 9.375 8.33242C8.8 8.33242 8.33333 7.86575 8.33333 7.29075C8.33333 6.71575 8.8 6.24909 9.375 6.24909ZM13.5417 6.24909C14.1167 6.24909 14.5833 6.71575 14.5833 7.29075C14.5833 7.86575 14.1167 8.33242 13.5417 8.33242C12.9667 8.33242 12.5 7.86575 12.5 7.29075C12.5 6.71575 12.9667 6.24909 13.5417 6.24909Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconDialog.vue' })
export default class IconDialog extends SvgIconBase {
  @Prop({ default: '0 0 25 25' }) readonly viewBox!: string;
  @Prop({ default: 'dialog' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
