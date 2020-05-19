<template>
  <svg
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    class="svg-icon"
    :style="sizeSvg()"
    fill="none"
    v-on="$listeners"
  >
    <title v-if="titleF" v-text="$t(title)"></title>
    <slot />
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({
  name: 'SvgIconBase'
})
export default class SvgIconBase extends Vue {
  @Prop({ default: 'icons' }) readonly title!: string;
  @Prop({ default: true }) readonly titleF!: boolean;
  @Prop({ default: null }) readonly size!: number;
  @Prop({ default: '0 0 24 24' }) readonly viewBox!: string;
  @Prop({ default: 24 }) readonly width!: number;
  @Prop({ default: 24 }) readonly height!: number;
  @Prop({ default: '#5A81EA' }) readonly color!: string;
  @Prop({ default: 0 }) readonly strokeWidth!: number;
  @Prop({ default: '#FFFFFF' }) readonly hoverColor!: string;

  public isHover: Boolean = false;

  public addPx(num: number): number {
    if (num <= 0) return 18;
    return num;
  }

  /**
   * style template svg
   */
  public sizeSvg(): {} {
    if (this.size) {
      return {
        width: this.addPx(this.size),
        height: this.addPx(this.size)
      };
    } else {
      return {
        width: this.addPx(this.width),
        height: this.addPx(this.height)
      };
    }
  }
  get pathAttrs() {
    return {
      fill: this.isHover ? this.hoverColor : this.color,
      stroke: this.strokeWidth
        ? this.isHover
          ? this.hoverColor
          : this.color
        : null,
      'stroke-width': this.strokeWidth
    };
  }
  get pathStroke() {
    return {
      stroke: this.strokeWidth
        ? this.isHover
          ? this.hoverColor
          : this.color
        : null,
      'stroke-width': this.strokeWidth
    };
  }
}
</script>
