<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M9.16667 7.49999H7.5V1.66666H5.83333V7.49999H4.16667V1.66666H2.5V7.49999C2.5 9.26666 3.88333 10.7 5.625 10.8083V18.3333H7.70833V10.8083C9.45 10.7 10.8333 9.26666 10.8333 7.49999V1.66666H9.16667V7.49999ZM13.3333 4.99999V11.6667H15.4167V18.3333H17.5V1.66666C15.2 1.66666 13.3333 3.53332 13.3333 4.99999Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconAppliances.vue' })
export default class IconAppliances extends SvgIconBase {
  @Prop({ default: '0 0 20 20' }) readonly viewBox!: string;
  @Prop({ default: 'appliances' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
