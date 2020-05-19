<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M15.8727 14.4307L11.736 10.294C12.514 9.224 12.974 7.908 12.974 6.48667C12.974 2.91 10.064 0 6.48667 0C2.91 0 0 2.91 0 6.48667C0 10.064 2.91 12.9733 6.48667 12.9733C7.84267 12.9733 9.102 12.5553 10.1447 11.8413L14.3033 16L15.8727 14.4307ZM1.90267 6.48667C1.90267 3.95867 3.95933 1.902 6.48733 1.902C9.01533 1.902 11.072 3.95867 11.072 6.48667C11.072 9.01467 9.01533 11.0713 6.48733 11.0713C3.95867 11.0713 1.90267 9.01467 1.90267 6.48667Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconSearch.vue' })
export default class IconSearch extends SvgIconBase {
  @Prop({ default: '0 0 16 16' }) readonly viewBox!: string;
  @Prop({ default: 'search' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
