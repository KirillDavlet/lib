<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M5 15.7037V18.52H7.81628L16.1224 10.2139L13.3061 7.39759L5 15.7037ZM18.3003 8.03594C18.5932 7.74305 18.5932 7.26992 18.3003 6.97703L16.543 5.21967C16.2501 4.92678 15.7769 4.92678 15.4841 5.21967L14.1097 6.59401L16.926 9.41029L18.3003 8.03594Z"
      v-bind="pathAttrs"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconEdit.vue' })
export default class IconAccount extends SvgIconBase {
  @Prop({ default: 'edit' }) readonly title!: string;
  @Prop({ default: '#C3D6E0' }) readonly color!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
