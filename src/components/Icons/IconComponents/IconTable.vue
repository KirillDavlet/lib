<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M22.6562 3.90625H2.34375C1.91162 3.90625 1.5625 4.25537 1.5625 4.6875V20.3125C1.5625 20.7446 1.91162 21.0938 2.34375 21.0938H22.6562C23.0884 21.0938 23.4375 20.7446 23.4375 20.3125V4.6875C23.4375 4.25537 23.0884 3.90625 22.6562 3.90625ZM21.6797 8.98438H16.5039V5.66406H21.6797V8.98438ZM21.6797 14.4531H16.5039V10.5469H21.6797V14.4531ZM10.0586 10.5469H14.9414V14.4531H10.0586V10.5469ZM14.9414 8.98438H10.0586V5.66406H14.9414V8.98438ZM3.32031 10.5469H8.49609V14.4531H3.32031V10.5469ZM3.32031 5.66406H8.49609V8.98438H3.32031V5.66406ZM3.32031 16.0156H8.49609V19.3359H3.32031V16.0156ZM10.0586 16.0156H14.9414V19.3359H10.0586V16.0156ZM21.6797 19.3359H16.5039V16.0156H21.6797V19.3359Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconTable.vue' })
export default class IconTable extends SvgIconBase {
  @Prop({ default: '0 0 25 25' }) readonly viewBox!: string;
  @Prop({ default: 'table' }) readonly title!: string;
  @Prop({ default: '#617CDF' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
