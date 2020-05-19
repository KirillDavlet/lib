<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M13.7919 7.01034C12.8559 6.07434 11.6319 5.60234 10.3999 5.60234V10.4023L7.0079 13.7943C8.8799 15.6663 11.9199 15.6663 13.7999 13.7943C15.6719 11.9223 15.6719 8.88234 13.7919 7.01034ZM10.3999 2.40234C5.9839 2.40234 2.3999 5.98634 2.3999 10.4023C2.3999 14.8183 5.9839 18.4023 10.3999 18.4023C14.8159 18.4023 18.3999 14.8183 18.3999 10.4023C18.3999 5.98634 14.8159 2.40234 10.3999 2.40234ZM10.3999 16.8023C6.8639 16.8023 3.9999 13.9383 3.9999 10.4023C3.9999 6.86634 6.8639 4.00234 10.3999 4.00234C13.9359 4.00234 16.7999 6.86634 16.7999 10.4023C16.7999 13.9383 13.9359 16.8023 10.3999 16.8023Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconDiag.vue' })
export default class IconDiag extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'diag' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
