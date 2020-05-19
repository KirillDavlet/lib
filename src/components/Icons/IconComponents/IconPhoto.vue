<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <path
      d="M47.2083 7.875H12.7917C10.0763 7.875 7.875 10.0763 7.875 12.7917V47.2083C7.875 49.9237 10.0763 52.125 12.7917 52.125H47.2083C49.9237 52.125 52.125 49.9237 52.125 47.2083V12.7917C52.125 10.0763 49.9237 7.875 47.2083 7.875Z"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.3955 25.0833C23.4321 25.0833 25.083 23.4323 25.083 21.3958C25.083 19.3592 23.4321 17.7083 21.3955 17.7083C19.359 17.7083 17.708 19.3592 17.708 21.3958C17.708 23.4323 19.359 25.0833 21.3955 25.0833Z"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52.1253 37.3749L39.8337 25.0833L12.792 52.1249"
      v-bind="pathStroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconPhoto.vue' })
export default class IconPhoto extends SvgIconBase {
  @Prop({ default: '0 0 60 60' }) readonly viewBox!: string;
  @Prop({ default: 'photo' }) readonly title!: string;
  @Prop({ default: '#C3D6E0' }) readonly color!: string;
  @Prop({ default: 2.95 }) readonly strokeWidth!: number;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
