<template>
  <svg-icon-base
    v-bind="$props"
    v-on="$listeners"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M12 0.288086L14.833 9.00609H24L16.583 14.3951L19.416 23.1131L12 17.7251L4.583 23.1131L7.416 14.3951L0 9.00609H9.167L12 0.288086Z"
        v-bind="pathAttrs"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg-icon-base>
</template>

<script lang="ts">
import { Component, Emit, Prop } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';

@Component({ name: 'IconStar.vue' })
export default class IconStar extends SvgIconBase {
  @Prop({ default: 'star' }) readonly title!: string;

  public isHover: boolean = false;
}
</script>

<style lang="sass"></style>
