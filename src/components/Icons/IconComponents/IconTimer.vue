<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M12.6786 0H6.96429V1.90476H12.6786V0ZM8.86905 12.381H10.7738V6.66667H8.86905V12.381ZM16.5167 6.08571L17.869 4.73333C17.4595 4.24762 17.0119 3.79048 16.5262 3.39048L15.1738 4.74286C13.6976 3.5619 11.8405 2.85714 9.82143 2.85714C5.0881 2.85714 1.25 6.69524 1.25 11.4286C1.25 16.1619 5.07857 20 9.82143 20C14.5643 20 18.3929 16.1619 18.3929 11.4286C18.3929 9.40952 17.6881 7.55238 16.5167 6.08571ZM9.82143 18.0952C6.13571 18.0952 3.15476 15.1143 3.15476 11.4286C3.15476 7.74286 6.13571 4.7619 9.82143 4.7619C13.5071 4.7619 16.4881 7.74286 16.4881 11.4286C16.4881 15.1143 13.5071 18.0952 9.82143 18.0952Z"
        v-bind="pathAttrs"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect v-bind="sizeSvg()" fill="white" />
      </clipPath>
    </defs>
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconTimer.vue' })
export default class IconTimer extends SvgIconBase {
  @Prop({ default: '0 0 20 20 ' }) readonly viewBox!: string;
  @Prop({ default: 'timer' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
