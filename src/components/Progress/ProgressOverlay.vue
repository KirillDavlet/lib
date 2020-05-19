<template>
  <transition name="fade">
    <div class="app-progress-overlay" v-show="show">
      <div class="progress">
        <div
          v-if="type == 'determinate'"
          class="determinate"
          :style="{ width: `${progressPercent}%` }"
        ></div>
        <div v-if="type == 'indeterminate'" class="indeterminate"></div>
      </div>
      <div
        class="overlay"
        :style="{ opacity: opacity }"
        v-if="httpProgress"
      ></div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class ProgressOverlay extends Vue {
  @Prop({ default: 'determinate' }) type!: string;

  public show: boolean = false;
  public opacity: number = 0;
  public progressPercent: number = 0;
  public progressInterval: any = null;
  public showTimeout: any = null;
  public httpProgress: boolean = false;
  public httpTimeout: number = process.env.VUE_APP_HTTP_TIMEOUT;

  public created() {
    this.$store.watch(
      (state: any) => state.device.loading,
      (newVal: number, oldVal: number) => {
        if (newVal === 0) {
          //console.log('progressFinish')
          this.progressFinish();
        } else if (oldVal === 0) {
          //console.log('progressStart')
          this.progressStart();
        } else {
          //console.log('progressSet', 1.8 / Math.max(oldVal, newVal))
          this.progressSet(1.8 / Math.max(oldVal, newVal));
        }
      }
    );
  }
  public progressStart() {
    this.httpProgress = true;
    this.progressPercent = 10;
    this.show = true;
    this.opacity = 0.2;
    this.progressInterval = setInterval(() => {
      if (this.progressPercent < 100) {
        ++this.progressPercent;
      } else {
        this.progressFinish();
      }
    }, this.httpTimeout / 90);
  }
  public progressSet(value: number) {
    const percent = value * 100;
    if (percent > this.progressPercent) {
      this.progressPercent = percent;
    }
  }
  public progressFinish() {
    this.httpProgress = false;
    this.opacity = 0;
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
      this.progressPercent = 100;
    }
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    this.showTimeout = setTimeout(() => {
      if (this.progressPercent == 100) {
        this.show = false;
      }
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }, 500);
  }

  get loadingProccesses() {
    return this.$store.state.device.loading;
  }
}
</script>
<style lang="sass">
.app-progress-overlay, .app-progress
  .progress
    position: absolute
    top: 0
    height: .5rem
    display: block
    width: 100%
    background-color: var(--primary-hover-transparent)
    background-clip: padding-box
    overflow: hidden
    z-index: 1
  .determinate
    position: absolute
    background-color: inherit
    top: 0
    bottom: 0
    background-color: var(--primary)
    transition: width .5s linear
  .indeterminate
    background-color: var(--primary)
    &:before
      content: ''
      position: absolute
      background-color: inherit
      top: 0
      left: 0
      bottom: 0
      will-change: left, right
      // Custom bezier
      animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite
    &:after
      content: ''
      position: absolute
      background-color: inherit
      top: 0
      left: 0
      bottom: 0
      will-change: left, right
      // Custom bezier
      animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite
      animation-delay: 1.15s
  .overlay
    position: absolute
    top: 0
    background: #393939
    height: 100%
    width: 100%
    opacity: 0
    will-change: opacity

@mixin keyframes($animation-name)
  @-webkit-keyframes #{$animation-name}
    @content

  @-moz-keyframes #{$animation-name}
    @content

  @keyframes #{$animation-name}
    @content

@include keyframes(indeterminate)
  0%
    left: -35%
    right: 100%
  60%
    left: 100%
    right: -90%
  100%
    left: 100%
    right: -90%

@include keyframes(indeterminate-short)
  0%
    left: -200%
    right: 100%
  60%
    left: 107%
    right: -8%
  100%
    left: 107%
    right: -8%
</style>
